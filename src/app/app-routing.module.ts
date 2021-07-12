import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'categories', component: CategoryListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
