import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent {

  id?:number;
  customers:Customer = new Customer();

  constructor(private customerService: CustomerService, private router:ActivatedRoute, private route:Router) {}

  ngOnInit(): void {
    this.id=this.router.snapshot.params['invoiceNo'];
    this.customerService.getCustomerByInvoice( this.id).subscribe(data=>{
      this.customers=data;
    })
  }

  updateCustomer(){
    this.customerService.updateCustomer( this.id,this.customers).subscribe(data=>{
      this.customers= new Customer();
      this.gotoCustomerList();
  })
}


gotoCustomerList(){
  this.route.navigate(['/list']);
}

  ngOnSubmit(){
    this.updateCustomer();
  }



}
