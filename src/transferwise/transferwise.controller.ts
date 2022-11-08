import { Controller, Get, Post } from '@nestjs/common';
import { TransferwiseService } from './transferwise.service';

@Controller('wise')
export class TransferwiseController {
  constructor(private readonly transferwiseService: TransferwiseService) {}

  @Get()
  getProfile() {
    this.transferwiseService.getProfile();
  }

  @Get("balance")
  getBalance() {
    return this.transferwiseService.getBalance();
  }

  @Get("rate")
  getExchangeRate() {
    return this.transferwiseService.getExchangeRate();
  }

  @Post("createRecipient")
  createRecipientAccount() {
    return this.transferwiseService.createRecipientAccount();
  }

  @Post("createQuote")
  createQuote() {
    return this.transferwiseService.createQuote();
  }

}
