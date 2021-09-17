import { Account } from "./entities/account.entity";

export const accountsProvider = [
  {
    provide: 'ACCOUNTS_REPOSITORY',
    useValue: Account,
  },
];