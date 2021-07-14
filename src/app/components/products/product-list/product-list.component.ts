import { Observable, Subscription } from 'rxjs';
import { Category } from './../../categories/category';
import { HeaderDataService } from '../../templates/header/header-data.service';
import { ProductService } from '../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
		private dialog: MatDialog,
		private categoryService: CategoryService
	) {
		super(productService);

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

	ngOnDestroy() {
		this.categoriesSubscription.unsubscribe();
		this.produtosSubscription.unsubscribe();
		this.setCategoryProductSubscription.unsubscribe();
		super.ngOnDestroy();
	}
}
