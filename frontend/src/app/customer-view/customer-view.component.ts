import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  id?:number;
  customers:Customer = new Customer();

  constructor(private customerService: CustomerService, private router:ActivatedRoute, private route:Router) {}

  ngOnInit(): void {
    this.id=this.router.snapshot.params['invoiceNo'];
    this.customerService.getCustomerByInvoice( this.id).subscribe(data=>{
      this.customers=data;
    })
  }


gotoCustomerList(){
  this.route.navigate(['/list']);
}

  ngOnSubmit(){
    this.gotoCustomerList();
  }



}


