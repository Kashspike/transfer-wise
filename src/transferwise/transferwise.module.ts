import { Module } from '@nestjs/common';
import { TransferwiseController } from './transferwise.controller';
import { TransferwiseService } from './transferwise.service';

@Module({
  imports: [],
  controllers: [TransferwiseController],
  providers: [TransferwiseService],
})
export class TransferwiseModule {}
