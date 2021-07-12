import { BaseResourceService } from '../../shared/base-resource.service';
import { Category } from './category';
import { Injectable, Injector } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class CategoryService extends BaseResourceService<Category> {
	constructor(protected injector: Injector) {
		super('categories', injector);
	}
}
