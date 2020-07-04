import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { DeleteConfirmationComponent } from './components/product/delete-confirmation/delete-confirmation.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteConfirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
