import { Injectable, Post } from '@nestjs/common';
import { WISE_CLIENT } from './client.config';

export let WISE_PROFILES = [];

@Injectable()
export class TransferwiseService {

  getProfile() {
    (async () => {
        const profiles = await WISE_CLIENT.getProfilesV2({});
        WISE_PROFILES = profiles;
        console.log(WISE_PROFILES);
    })()
  }

  getBalance() {
     (async () => {
        const balances = await WISE_CLIENT.getBalancesV3({
            profileId: WISE_PROFILES[0].id,
        });
        console.log(balances);
      })()
  }

  getExchangeRate() {
    return WISE_CLIENT.getExchangeRatesV1({});
  }

  createRecipientAccount() {
    return WISE_CLIENT.createRecipientAccountV1({
        accountHolderName: 'Bikash Test',
        currency: 'USD', 
        ownedByCustomer: true,
        profileId: WISE_PROFILES[0].id,
        details: {
            legalType: "PRIVATE",
            sortCode: "231470", 
            accountNumber: "28821822" 
        }
    });
  }

  createQuote() {
    return WISE_CLIENT.createQuoteV2({
        profileId: WISE_PROFILES[0].id,
        sourceCurrency: 'EUR',
        targetCurrency: 'GBP',
        targetAmount: 12.22,
        payOut: 'BALANCE',
      });
  }
}
