import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'products',
		loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
	},
	{
		path: 'categories',
		loadChildren: () =>
			import('./pages/categories/categories.module').then(m => m.CategoriesModule),
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
