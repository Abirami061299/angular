import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  form=new FormGroup({
    productName:new FormControl('',Validators.required),
    availableQuantity:new FormControl('',Validators.required),
    unitPrice:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
    
  }

}
