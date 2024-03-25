import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];
 
  constructor(private customerService: CustomerService, private router:Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomersList().subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }

  updateCustomer(invoiceNo:any){
    this.router.navigate(['update', invoiceNo])
  } 

  viewCustomer(invoiceNo:any){
    this.router.navigate(['view', invoiceNo])
  } 

  deleteCustomer(invoiceNo:any){
    this.customerService.deleteCustomer(invoiceNo).subscribe(data=>{
      alert("this data will be removed")
      this.getCustomers()
    })
    } 
}
