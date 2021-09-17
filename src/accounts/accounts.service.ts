import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {

  constructor(@Inject('ACCOUNTS_REPOSITORY') private accountsModel: typeof Account) { }

  create(createAccountDto: CreateAccountDto) {
    return this.accountsModel.create(createAccountDto);
  }

  findAll() {
    return this.accountsModel.findAll();
  }

  findOne(id: string) {
    return this.accountsModel.findByPk(id, { rejectOnEmpty: true })
  }
}
