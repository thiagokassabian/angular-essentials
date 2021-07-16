import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/base-resources/base-resource.service';
import { Product } from './product';

@Injectable({
	providedIn: 'root',
})
export class ProductService extends BaseResourceService<Product> {
	constructor(protected injector: Injector) {
		super('products', injector);
	}
}
