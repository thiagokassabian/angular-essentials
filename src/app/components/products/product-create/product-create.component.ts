import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { ProductService } from '../product.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Product } from '../product'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent extends BaseResourceListComponent<Product> {

	product: Product = {
		name: '',
		price: undefined
	}

	constructor(protected productService: ProductService, protected injector: Injector) {
		super(productService, new Product(), injector)
	}

}
