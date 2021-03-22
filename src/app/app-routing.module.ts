import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddProductComponent } from './add-product/add-product.component';

import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductUpdationComponent } from './product-updation/product-updation.component';
import { ProductListComponent } from './product-list/product-list.component';

import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
 {path:'',redirectTo:'/product-list',pathMatch:'full'},
  {path:'add-product',component:AddProductComponent},
  {path:'place-order/:id',component:PlaceOrderComponent},
  {path:'product-updation/:id',component:ProductUpdationComponent},
  {path:'product-list',component:ProductListComponent},
  
  {path:'order-summary',component:OrderSummaryComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AddProductComponent,PlaceOrderComponent,ProductUpdationComponent,ProductListComponent,OrderSummaryComponent]
