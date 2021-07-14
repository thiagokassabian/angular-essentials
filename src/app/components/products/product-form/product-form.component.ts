import { Subscription } from 'rxjs';
import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseResourceFormComponent } from 'src/app/shared/base-resource-form.component';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent
	extends BaseResourceFormComponent<Product>
	implements OnInit, OnDestroy
{
	title: string = 'Cadastrar produto';
	btnSubmitLabel: string = 'Cadastrar';
	categories: Category[];
	categoriesSubscription: Subscription;

	constructor(
		protected productService: ProductService,
		protected injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private categoryService: CategoryService
	) {
		super(productService, new Product(), injector);

		if (data) {
			this.title = 'Atualizar produto';
			this.btnSubmitLabel = 'Atualizar';
			delete data.category;
			const product = Object.assign(new Product(), data);
			this.resource = product;
		}
	}
	ngOnInit() {
		this.getCategories();
	}

	getCategories = () => {
		this.categoriesSubscription = this.categoryService.getAll().subscribe(response => {
			this.categories = response;
		});
	};

	ngOnDestroy() {
		this.categoriesSubscription.unsubscribe();
		super.ngOnDestroy();
	}
}
