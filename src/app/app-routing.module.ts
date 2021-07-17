import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
		path: 'users',
		loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
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
