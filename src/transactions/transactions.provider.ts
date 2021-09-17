import { Transaction } from "./entities/transaction.entity";

export const transactionsProvider = [
  {
    provide: 'TRANSACTIONS_REPOSITORY',
    useValue: Transaction,
  },
];