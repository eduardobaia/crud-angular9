import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

product: Product = {
  name: '',
  price: null
}

  ngOnInit() {
  }

createProduct(): void {
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage("Produto Criado eduardo!");
    this.router.navigate(['/products']);
  });

}


cancel(): void {
  this.router.navigate(['/products']);
}

}
