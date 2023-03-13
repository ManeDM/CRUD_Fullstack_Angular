import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {

  form: FormGroup;
  loading: boolean = false;
  id: Number;
  operacion: String = 'Agregar ';

constructor(private fb: FormBuilder,
   private _productService: ProductService,
   private router: Router,
   private toastr: ToastrService,
   private aRoute: ActivatedRoute) {

  this.form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    stock: [null, Validators.required]
  })

  this.id = Number(aRoute.snapshot.paramMap.get('id'));
}

ngOnInit(): void {
  if(this.id !=0) {
    // Editar
    this.operacion = 'Editar '
    this.getProduct(this.id);
  }
}

getProduct(id: Number) {
  this.loading = true;
  this._productService.getProduct(id).subscribe((data: Product) => {
    this.loading = false;
    this.form.setValue({
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock
    })

  })
}

addProduct() {
  //console.log(this.form.value.name)
 const product: Product = {
    name: this.form.value.name,
    description: this.form.value.description,
    price: this.form.value.price,
    stock: this.form.value.stock
  }
  this.loading = true;

  if(this.id !== 0) {
    //Editar
    product.id = this.id as number;
    this._productService.updateProduct(this. id, product).subscribe(() => {
      this.toastr.info(`El producto ${product.name} fue actualizado con exito`, 'Producto Actualziado');
      this.loading = false;
      this.router.navigate(['/products']);
    })
  } else {
    //Agregar
    this._productService.addProduct(product).subscribe(() => {
      this.toastr.success(`El producto ${product.name} fue añadido con exito`, 'Producto Registrado');
      this.loading = false;
      this.router.navigate(['/products']);
  })
  }

  
  
  
}
}
