import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { products } from '../Interfaces/productInterface';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const productUrl=environment.productUrl+"/product"
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  listProducts: products[] = [];
  constructor(private http:HttpClient) { }
 
  getData(): Observable<products[]> {
    return this.http.get<products[]>(productUrl).pipe(map(data => {
      this.listProducts = data;
      return data;
    }));
  }
  
  getProducts():Observable<products[]>{
    return this.http.get<products[]>(productUrl);
    
  }

  postData(data:any):Observable<any> {
   // console.log("from product service"+data)
    return this.http.post<any>(productUrl ,data,{responseType:'text' as 'json'})
 
  }

  deleteProduct(productId:string):Observable<any>{
    console.log(productId)
      return this.http.delete<string>(productUrl+'/'+productId)
  }

  updateProduct(productId:string,data:any):Observable<any>{
     console.log(productId)
    return this.http.put<any>(productUrl+'/'+productId,data);
  }

  

  
}
