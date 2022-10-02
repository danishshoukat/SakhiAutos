import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { AddproductComponent } from './Components/addproduct/addproduct.component';
import { SalesReportComponent } from './Components/sales-report/sales-report.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'addproduct',
        component: AddproductComponent,
      },
      {
        path: 'salesReport',
        component: SalesReportComponent,
      },
    ],
  },
  // {path:"products",component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
