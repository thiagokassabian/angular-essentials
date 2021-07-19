import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
		//canActivate: [AuthGuard],
	},
	{
		path: 'products',
		loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
		//canActivate: [AuthGuard],
	},
	{
		path: 'categories',
		loadChildren: () =>
			import('./pages/categories/categories.module').then(m => m.CategoriesModule),
		//canActivate: [AuthGuard],
	},
	{
		path: 'users',
		loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
		//canActivate: [AuthGuard],
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
	providers: [AuthGuard],
})
export class AppRoutingModule {}
