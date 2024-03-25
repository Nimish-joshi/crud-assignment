import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routes: Routes = [
  {path:'list',component:CustomerListComponent},
  {path:'create',component:CustomerCreateComponent},
  {path:'update/:invoiceNo',component:CustomerUpdateComponent},
  {path:'view/:invoiceNo',component:CustomerViewComponent},
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'**',component:CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
