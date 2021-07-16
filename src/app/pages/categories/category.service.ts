import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/base-resources/base-resource.service';
import { Category } from './category';

@Injectable({
	providedIn: 'root',
})
export class CategoryService extends BaseResourceService<Category> {
	constructor(protected injector: Injector) {
		super('categories', injector);
	}
}
