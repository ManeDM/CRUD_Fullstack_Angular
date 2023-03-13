import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: String ;
  private myApiUrl: String;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products/'
   }

   getListProducts(): Observable<Product[]> {
    // const token = localStorage.getItem('token'); // Obtener el token desde el almacenamiento local
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Agregar el token al encabezado
    // return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers }); // Hacer la solicitud HTTP con el encabezado de autorización
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

   deleteProduct(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
   }

   addProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, product)
   }

   getProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${id}`)
   }

   updateProduct(id: Number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product )
   }
}
