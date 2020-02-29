import { CurrencyPipe } from '@angular/common';

export class Customer {
  customerName: string;
  customerAddress: string;
  totalPrice: CurrencyPipe;
  brokerName: string;
  brokerAddress: string;
  contractStartDate: Date;
  contractEndDate: Date
}
