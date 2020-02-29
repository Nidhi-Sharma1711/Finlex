import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { MatListModule } from '@angular/material/list';
import { CustomerService } from './services/customer.service';
import { CustomerEndpoint } from './shared/customerEndpoint';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [CustomerService, { provide: 'CustomerEndpoint', useValue: CustomerEndpoint }, ProcessHTTPMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
