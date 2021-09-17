import { Inject, Injectable } from '@nestjs/common';
import { TenantService } from 'src/tenant/tenant/tenant.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';


@Injectable()
export class TransactionsService {

  constructor(
    @Inject('TRANSACTIONS_REPOSITORY') private transactionModel: typeof Transaction,
    private tenantService: TenantService){}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      ...createTransactionDto,
      account_id: this.tenantService.tenant.id,
    });
  }

  findAll() {
    return this.transactionModel.findAll({
      where: {
        account_id: this.tenantService.tenant.id,
      }
    });
  }

}
