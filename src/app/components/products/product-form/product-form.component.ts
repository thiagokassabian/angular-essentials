import { Component, Inject, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseResourceFormComponent } from 'src/app/shared/base-resource-form.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent extends BaseResourceFormComponent<Product> {
	title: string = 'Cadastrar produto'
	btnSubmitLabel: string = 'Cadastrar'

	constructor(
		protected productService: ProductService,
		protected injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: string
	) {
		super(productService, new Product(), injector)

		if (data) {
			this.loadResource(data)
			this.title = 'Atualizar produto'
			this.btnSubmitLabel = 'Atualizar'
		}
	}

}