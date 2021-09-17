import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { DatabaseModule } from 'src/database/DatabaseModule';
import { accountsProvider } from './accounts.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsService, ...accountsProvider]
})
export class AccountsModule {}
