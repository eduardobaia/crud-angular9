import { Product } from './../../product/product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];


  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.read().subscribe(products => {
      this.products = products;
      console.log(products)
    });
  }


}
