import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {


  product: Product;

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe( product => {
        this.product = product
    });
  }


  deleteProduct():void {
      this.service.delete(this.product.id).subscribe( () => {
        this.service.showMessage('Produto excluido com sucesso!');
        this.router.navigate(['/products']);
      });
  }

  cancel():void {
      this.router.navigate(['/products']);
  }
}
