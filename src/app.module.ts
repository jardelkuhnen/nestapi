import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

import * as dotenv from "dotenv";
import { DatabaseModule } from './database/DatabaseModule';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
