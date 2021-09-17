import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { transactionsProvider } from './transactions.provider';
import { DatabaseModule } from 'src/database/DatabaseModule';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ...transactionsProvider]
})
export class TransactionsModule {}
