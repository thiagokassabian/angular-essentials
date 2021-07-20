import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BaseResourceFormComponent } from 'src/app/shared/base-resources/base-resource-form.component';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';

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
		super(productService, new Product(), injector, data);

		if (this.data) {
			this.title = 'Atualizar produto';
			this.btnSubmitLabel = 'Atualizar';
		}
	}

	ngOnInit() {
		this.getCategories();
		super.ngOnInit();
	}

	private getCategories = () => {
		this.categoriesSubscription = this.categoryService.getAll().subscribe(response => {
			this.categories = response;
		});
	};

	protected buildForm = () => {
		this.resourceForm = this.formBuilder.group({
			id: [null],
			name: ['', Validators.required],
			price: [null, Validators.required],
			categoryId: [null, Validators.required],
		});
	};

	ngOnDestroy() {
		this.categoriesSubscription.unsubscribe();
		super.ngOnDestroy();
	}
}
