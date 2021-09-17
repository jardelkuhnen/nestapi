import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseModule } from './database/DatabaseModule';
import { AccountsModule } from './accounts/accounts.module';
import { CommomModule } from './commom/commom.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    TransactionsModule,
    AccountsModule,
    CommomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
