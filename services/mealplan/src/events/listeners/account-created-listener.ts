import { weekdays } from "constant";
import { Message } from "node-nats-streaming";
import { Subjects, Listener, AccountCreatedEvent } from "service-common";
import { queueGroupName } from "./queue-group-name";
import dayjs from "dayjs";
import { Date, IDateAttrs } from "../../models";

export class AccountCreatedListener extends Listener<AccountCreatedEvent> {
  readonly subject = Subjects.AccountCreated;
  queueGroupName = queueGroupName;

  readonly endDate = dayjs().endOf("isoWeek").add(1, "week");
  readonly startDate = dayjs();
  readonly numDatesToAdd = this.endDate.diff(this.startDate, "days");

  private addDate = async ({ date, name, userId }: IDateAttrs) => {
    return new Promise(async (resolve, reject) => {
      const doc = Date.addNew({
        date,
        name,
        userId,
      });

      await doc.save();

      resolve(doc);
    });
  };

  onMessage = async (data: AccountCreatedEvent["data"], msg: Message) => {
    let currentDate = this.startDate;

    this.addDate({
      date: currentDate.toDate(),
      name: weekdays[currentDate.day()],
      userId: data.userId,
    });

    for (const _ of Array(this.numDatesToAdd).fill(null)) {
      currentDate = currentDate.add(1, "day");

      await this.addDate({
        date: currentDate.toDate(),
        name: weekdays[currentDate.day()],
        userId: data.userId,
      });
    }

    msg.ack();
  };
}
