import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-updation',
  templateUrl: './product-updation.component.html',
  styleUrls: ['./product-updation.component.css']
})
export class ProductUpdationComponent implements OnInit {
  product:any;
  productName :string;
  productId :string;
  availableQuantity:number;
  unitPrice:number;
  orderedQuantity:number;
  
  public alertSuccess: boolean;
  public alertFailure:boolean;
  constructor(private orderService:OrderServiceService,private productService:ProductServiceService,
             private activatedRoute: ActivatedRoute) { }

  


    
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.productService.getData().subscribe(result => {

      result.forEach(product => {
        if (product.productId == this.productId) {
          this.product = product;
          this.unitPrice=product["unitPrice"]
          this.availableQuantity=product["availableQuantity"]
          this.productName=product["productName"]
          this.productId=product["productId"]
        }
      })
    })
  }

  onSubmit(formData:any){
    this.productService.updateProduct(this.productId,formData.value)
    .subscribe((result:any) =>
       {
       this.alertSuccess=true;
      },
    (error)=>{
       this.alertFailure=false;
       console.log("error")
      }
    )  
  }

}
