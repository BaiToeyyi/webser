import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { StoreService } from '../service/store.service';
import { Products } from '../service/product_models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allProducts: Observable<Products[]>;
  ProductForm: FormGroup;
  data: Products[] = [];

  massage = null;
  dataSaved = false;
  productIdUpdate = null;
  http: any;
  router: any;
  posts: any;
  submitted = false;

  constructor(
    private formbulider: FormBuilder, 
    private storeservice:StoreService, 
    private api: StoreService){}

  ngOnInit() {
    this.ProductForm = this.formbulider.group({  
      _id: ['',[Validators.required]],
      product_code: ['',[Validators.required]],  
      product_name: ['',[Validators.required]],  
      category: ['',[Validators.required]],  
      unit: ['',[Validators.required]],  
      price: ['',[Validators.required]],  
      // image: ['',[Validators.required]],
      // create_date: ['',[Validators.required]],
      // create_time: ['',[Validators.required]],
      create_by: ['',[Validators.required]],  
    }); 
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.storeservice.getAllProducts().subscribe(data=>{
      this.data = data;
    });
  };

  onClick(post:Products){
    this.ProductForm.patchValue({
      _id: post._id,
      product_code: post.product_code,  
      product_name: post.product_name,  
      category: post.category,  
      unit: post.unit,  
      price: post.price,  
      image: post.image,
      create_date: post.create_by,
      create_time: post.create_time,
      create_by: post.create_by 
    })
  }

  onFormSubmit() {   
    this.ProductForm.reset();  
  } 

  onSubmit(){
    this.submitted = true
     
    if(this.ProductForm.valid){
      this.storeservice.updateProduct(this.ProductForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }else{
      this.storeservice.addProduct(this.ProductForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
    this.ProductForm.reset();
  }

  deleteProduct(product: Products){
    
    this.storeservice.deleteProduct(product._id).subscribe(data=>{
      console.log(data);
      this.getAllProducts();
    });
  }

}
