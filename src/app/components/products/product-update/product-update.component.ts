import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent extends BaseResourceListComponent<Product> {

	constructor(protected productService: ProductService, protected route: ActivatedRoute, protected injector: Injector) {
		super(productService, new Product(), injector)

		const id = this.route.snapshot.paramMap.get('id')
		this.readById(id!)
	}

}