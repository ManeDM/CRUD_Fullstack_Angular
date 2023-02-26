import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// COMPONENTES
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'add', component: AddEditProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }