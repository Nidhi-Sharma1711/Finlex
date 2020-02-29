import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/customer';
import { CustomerEndpoint } from '../shared/customerEndpoint';
import { catchError, map, tap } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service'


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(CustomerEndpoint)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    
    
  }
}
