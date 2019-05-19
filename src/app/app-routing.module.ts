import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { StoreComponent } from './layouts/store/store.component';
import { ProductComponent } from './layouts/product/product.component'

const route: Route[] = [
  { path: '', component: StoreComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
