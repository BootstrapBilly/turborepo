import { Message } from "node-nats-streaming";
import { Subjects, Listener, AccountCreatedEvent } from "service-common";
import { queueGroupName } from "./queue-group-name";

export class AccountCreatedListener extends Listener<AccountCreatedEvent> {
  readonly subject = Subjects.AccountCreated;
  queueGroupName = queueGroupName;

  onMessage = async (data: AccountCreatedEvent["data"], msg: Message) => {
    console.log("Event received");

    console.log(data, "data");

    msg.ack();
  };
}
