import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TenantService {

    private account: Account | null;

    constructor(@Inject('ACCOUNTS_REPOSITORY') private accountsModel: typeof Account) {}

    get tenant() {
        return this.account;
    }

    set tenant(tenant: Account) {
        this.account = tenant;
    }

    async setTenantBy(subdomain: string) {
        this.tenant = await this.accountsModel.findOne({
            where: {
                subdomain,
            },
            rejectOnEmpty: true,
        })
    }
}
