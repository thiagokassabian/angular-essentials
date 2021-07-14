import { Component, Inject, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseResourceFormComponent } from 'src/app/shared/base-resource-form.component';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> {
	title: string = 'Cadastrar produto';
	btnSubmitLabel: string = 'Cadastrar';

	constructor(
		protected categoryService: CategoryService,
		protected injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: Category
	) {
		super(categoryService, new Category(), injector);

		if (data) {
			this.isCreate = false;
			this.title = 'Atualizar categoria';
			this.btnSubmitLabel = 'Atualizar';
			const category = Object.assign(new Category(), data);
			this.resource = category;
		} else {
			this.isCreate = true;
		}
	}

	protected buildForm = () => {
		this.resourceForm = this.formBuilder.group({
			id: [null],
			name: ['', Validators.required],
		});
	};
}
