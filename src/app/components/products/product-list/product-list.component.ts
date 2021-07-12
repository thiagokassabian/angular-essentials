import { Observable } from 'rxjs';
import { Category } from './../../categories/category';
import { HeaderDataService } from '../../templates/header/header-data.service';
import { ProductService } from '../product.service';
import { Component } from '@angular/core';
import { Product } from '../product';
import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CategoryService } from '../../categories/category.service';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent extends BaseResourceListComponent<Product> {
	displayedColumns: string[] = ['id', 'name', 'price', 'category', 'actions'];
	categories: Category[] = [];

	constructor(
		protected productService: ProductService,
		private headerDataService: HeaderDataService,
		private dialog: MatDialog,
		private categoryService: CategoryService
	) {
		super(productService);

		this.headerDataService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			url: '/products',
		};

		this.getCategories();
	}

	getCategories() {
		this.categoryService.getAll().subscribe(response => {
			this.categories = response;
		});
	}

	loadResources = () => {
		this.baseResourceService.getAll().subscribe(response => {
			this.setCategoryProduct(response).subscribe(response => {
				this.resources = response;
				this.dataSource.data = response;
			});
		});
	};

	setCategoryProduct = (products: any[]): Observable<any> =>
		new Observable(subscriber => {
			const newProducts: any[] = [];
			products.map(row => {
				const category = this.categories.find(category => {
					return category.id === row.categoryId;
				});
				row.category = category!.name;
				newProducts.push(row);
			});
			subscriber.next(newProducts);
			subscriber.complete();
		});

	openDialog(product?: any) {
		let data = {};
		if (product) {
			data = { data: { ...product } };
		}
		const dialogRef = this.dialog.open(ProductFormComponent, data);

		dialogRef.afterClosed().subscribe(result => {
			if (!result) this.loadResources();
		});
	}
}
