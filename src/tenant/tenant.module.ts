import { Global, Module } from '@nestjs/common';
import { AccountsModule } from 'src/accounts/accounts.module';
import { accountsProvider } from 'src/accounts/accounts.provider';
import { DatabaseModule } from 'src/database/DatabaseModule';
import { TenantService } from './tenant/tenant.service';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [TenantService, ...accountsProvider],
  exports: [TenantService, ...accountsProvider]
})
export class TenantModule {}
