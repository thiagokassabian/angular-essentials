import { BaseResourceService } from '../../shared/base-resource.service';
import { Product } from './product';
import { Injectable, Injector } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProductService extends BaseResourceService<Product> {

	constructor(protected injector: Injector) {
		super('products', injector)
	}

}
