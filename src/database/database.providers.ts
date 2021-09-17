import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'src/transactions/entities/transaction.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE' ,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: process.env.DB_CONNECTION as any,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels([Transaction]);
      await sequelize.sync({alter: true
        // , force: true
      });
      return sequelize;
    },
  },
];