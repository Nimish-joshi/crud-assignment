import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {
  

  customers:Customer = new Customer();

  constructor(private customerService: CustomerService, private router:Router) {}

  ngOnInit(): void {
  }

  addCustomer(){
    this.customerService.postCustomer(this.customers).subscribe(data=>{
      console.log(data);
      this.gotoCustomerList();
  })
  }

  gotoCustomerList(){
    this.router.navigate(['/list']);
  }

 ngOnSubmit(){
  console.log(this.customers);
  this.addCustomer();
 }

}
