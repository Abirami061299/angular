
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProductServiceService} from './services/product-service.service';

import { AddProductComponent } from './add-product/add-product.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderServiceService } from './services/order-service.service';
import { ProductUpdationComponent } from './product-updation/product-updation.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ProductListComponent } from './product-list/product-list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    PlaceOrderComponent,
    ProductUpdationComponent,
    ProductListComponent,
    OrderSummaryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
   MatSelectModule,
   MatDialogModule,
    MatIconModule,
    ReactiveFormsModule
    
  ],
  providers: [ProductServiceService,OrderServiceService ],
  bootstrap: [AppComponent,PlaceOrderComponent,ProductUpdationComponent,AddProductComponent,OrderSummaryComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
