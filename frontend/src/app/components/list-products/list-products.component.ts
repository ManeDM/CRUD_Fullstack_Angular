import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  
  listProducts: Product[] = [
    { id: 1, name: 'Pepsi', description: 'Bebida azucarada', price: 5, stock: 200},
    { id: 2, name: 'Costeña', description: 'Bebida alcoholica', price: 6, stock: 300},
  ]

constructor () {}

ngOnInit(): void {


}

}
