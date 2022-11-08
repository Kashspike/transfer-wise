import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransferwiseModule } from './transferwise/transferwise.module';

@Module({
  imports: [TransferwiseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
