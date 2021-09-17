import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { transactionsProvider } from './transactions.provider';
import { DatabaseModule } from 'src/database/DatabaseModule';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './entities/transaction.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ...transactionsProvider]
})
export class TransactionsModule {}
