import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl="http://localhost:8080/data/user";

  constructor(private httpClient:HttpClient) { }

  getCustomersList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

  postCustomer(customer:Customer):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,customer);
  }

  getCustomerByInvoice(invoiceNo?:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseUrl}/${invoiceNo}`);
  }

  updateCustomer(invoiceNo?: number, customer?: Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${invoiceNo}`, customer);
  }

  deleteCustomer(invoiceNo: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${invoiceNo}`);
  }
}
