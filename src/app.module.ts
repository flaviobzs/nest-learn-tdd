import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), ExchangeModule, CurrenciesModule],
})
export class AppModule {}

// criar projeto do nest em uma pasta existente
// nest new . 

// criar modulo do nest 
// nest g module "nome"

// criar um recurso do nest (todos os arquivos criados!!)
// nest g res "nome"