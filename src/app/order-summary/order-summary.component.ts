import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { products } from '../Interfaces/productInterface';
import { OrderServiceService } from '../services/order-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  searchValue:string;
  listData:MatTableDataSource<products>;
  displayedColumns:string[]=['productName','orderId','quantity','orderedDate','deliveryDate','totalPrice'];
  
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  format = 'MMM d,y hh:mm a';
  constructor(private orderService:OrderServiceService,private productService:ProductServiceService) { }

  ngOnInit(): void {

    this.orderService.getOrderDetails().subscribe(data=>{
    let orderSummaryList=data;
    console.log(orderSummaryList)
    this.listData=new MatTableDataSource(orderSummaryList);
    this.listData.sort=this.sort;
    this.listData.paginator=this.paginator;
    console.log("order details"+this.listData)
     });
    }
}
