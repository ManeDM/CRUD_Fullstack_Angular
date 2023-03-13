import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// COMPONENTES
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/sing-in/sing-in.component';

//GUARDS
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'singIn', component: SingInComponent},
  {path: 'products', component: ListProductsComponent, canActivate: [AuthGuard]},
  { path: 'add', component: AddEditProductComponent},
  { path: 'edit/:id', component:AddEditProductComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
