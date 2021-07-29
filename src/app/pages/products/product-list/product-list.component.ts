import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BaseResourceListComponent } from 'src/app/shared/base-resources/base-resource-list.component';
import { HeaderDataService } from 'src/app/core/header/header-data.service';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Category } from './../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent
	extends BaseResourceListComponent<Product>
	implements OnInit, OnDestroy
{
	displayedColumns: string[] = ['id', 'name', 'price', 'category', 'actions'];
	categories: Category[];
	private categoriesSubscription: Subscription;
	private produtosSubscription: Subscription;
	private setCategoryProductSubscription: Subscription;

	constructor(
		protected productService: ProductService,
		private headerDataService: HeaderDataService,
		protected injector: Injector,
		private categoryService: CategoryService
	) {
		super(productService, injector);

		this.headerDataService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			url: '/products',
		};
	}

	ngOnInit() {
		this.getCategories();
		super.ngOnInit();
	}

	private getCategories() {
		this.categoriesSubscription = this.categoryService.getAll().subscribe(response => {
			this.categories = response;
		});
	}

	protected loadResources = () => {
		this.produtosSubscription = this.baseResourceService.getAll().subscribe(response => {
			this.setCategoryProductSubscription = this.setCategoryProduct(response).subscribe(
				response => {
					this.resources = response;
					this.dataSource.data = response;
				}
			);
		});
	};

	private setCategoryProduct = (products: any[]): Observable<any> =>
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

	openDialog(resource?: any) {
		this.dialogForm(ProductFormComponent, resource);
	}

	ngOnDestroy() {
		this.categoriesSubscription.unsubscribe();
		this.produtosSubscription.unsubscribe();
		this.setCategoryProductSubscription.unsubscribe();
	}
}
