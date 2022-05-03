import { Subjects } from "../subjects";

export interface AccountCreated {
  subject: Subjects.AccountCreated;
  data: {
    userId: string;
  };
}
