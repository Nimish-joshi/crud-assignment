import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
