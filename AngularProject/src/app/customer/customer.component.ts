import { Component, OnInit } from '@angular/core';

import { Customer } from '../shared/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

 
export class CustomerComponent implements OnInit {

  customers: Customer[];

  errmsg: string;


  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    

    this.customerService.getCustomers().subscribe(
      customers => this.customers = customers,
      errmsg => this.errmsg = <any>errmsg);
  }

}
