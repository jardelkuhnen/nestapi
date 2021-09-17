import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';


@Injectable()
export class TransactionsService {

  constructor(@Inject('TRANSACTIONS_REPOSITORY') private transactionModel: typeof Transaction){}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create(createTransactionDto);
  }

  findAll() {
    return this.transactionModel.findAll();
  }

}
