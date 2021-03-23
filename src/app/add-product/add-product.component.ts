import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { FormControl, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public alertSuccess: boolean;
  public alertFailure: boolean;
  @ViewChild('formData') addForm: NgForm;

  constructor(private proService: ProductServiceService) { }

  ngOnInit(): void {

  }

  onSubmit(addForm) {
    console.log(addForm.value)
    this.proService.postData(addForm.value)
      .subscribe(data => {
        this.alertSuccess = true;
      },
        (error) => {
          this.alertFailure = true;

        })
     }
}






