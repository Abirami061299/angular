import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { orders } from '../interfaces/orderInterface';


const orderUrl=environment.productUrl+"/order";
//const productUrl=environment.productUrl+"/product";
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }
 
  
  
  placeOrder(data):Observable<any> {
  //  console.log("here from order service"+data)
    return this.http.post<any>(orderUrl ,data,{responseType:'text' as 'json'})
 
  }
  getOrderDetails():Observable<any[]>{
  //  console.log("from orderservice")
    return this.http.get<any[]>(orderUrl);
    
  }

  

}
