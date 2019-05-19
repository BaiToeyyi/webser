import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

import {Products}  from './product_models'

// https://www.zeptobook.com/angular-7-crud-with-node-js-api/
// https://www.c-sharpcorner.com/article/crud-operation-in-angular-7-using-web-api/

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // url = 'http://localhost:3000/products';

    url = '169.254.196.165/16'

  constructor(private http: HttpClient) { } 

  getAllProducts(): Observable<Products[]> {  
    return this.http.get<Products[]>(this.url);  
  }  

  getProductById(id: string){
    return this.http.get<Products>(this.url +'/' + id);
  }

  addProduct(product: Products){
    return this.http.post(this.url , product);
  }

  deleteProduct(id: string){
    return this.http.delete(this.url + '/' + id);
  }

  updateProduct(product: Products){
    return this.http.put(this.url + '/' + product._id, product);
  }
}
