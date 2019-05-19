import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

import { StoreService } from '../service/store.service';
import { Products } from '../service/product_models';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  allProducts: Observable<Products[]>;
  ProductForm: any;
  data: Products[] = [];
  isLoadingResults: boolean;

  constructor(private formbulider: FormBuilder, private storeservice:StoreService, private api: StoreService){}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.storeservice.getAllProducts().subscribe(data=>{
      this.data = data;
    });
  };

}
