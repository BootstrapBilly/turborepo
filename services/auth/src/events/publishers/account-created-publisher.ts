import { Publisher, Subjects, AccountCreatedEvent } from "service-common";

export class AccountCreatedPublisher extends Publisher<AccountCreatedEvent> {
  readonly subject = Subjects.AccountCreated;
}
