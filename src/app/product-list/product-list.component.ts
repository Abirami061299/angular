import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import {MatTableDataSource} from '@angular/material/table';
import { products } from '../Interfaces/productInterface';
import swal from 'sweetalert2/dist/sweetalert2.js';  

 
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddProductComponent } from '../add-product/add-product.component';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  searchValue:string;
  listData:MatTableDataSource<products>;
  displayedColumns:string[]=['productName','availableQuantity','unitPrice','actions','order'];
  
 
  @ViewChild(MatSort)sort:MatSort;
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
     let productList=data
     this.listData=new MatTableDataSource(productList);
     this.listData.sort=this.sort;
     this.listData.paginator=this.paginator;
      })
     
  }

deleteProduct(productId:string){
  this.productService.deleteProduct(productId)
      .subscribe((result:any) =>
         {
          swal.fire("Product Deleted ");
      },
      (error)=>{
          swal.fire("Failed to delete!!! ");
        })    
  }

applyFilter(filterValue:any){
   
   
    this.listData.filter=filterValue.trim().toLowerCase();
}
  
}
