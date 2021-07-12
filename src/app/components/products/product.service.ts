import { BaseResourceService } from '../../shared/base-resource.service';
import { Product } from './product';
import { Injectable, Injector } from '@angular/core';
import { CategoryService } from '../categories/category.service';

@Injectable({
	providedIn: 'root',
})
export class ProductService extends BaseResourceService<Product> {
	constructor(protected injector: Injector) {
		super('products', injector);
		// super('products/?_expand=category', injector);
	}
}
