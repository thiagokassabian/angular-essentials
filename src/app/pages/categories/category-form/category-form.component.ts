import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseResourceFormComponent } from 'src/app/shared/base-resources/base-resource-form.component';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> implements OnInit {
	title: string = 'Cadastrar categoria';
	btnSubmitLabel: string = 'Cadastrar';

	constructor(
		protected categoryService: CategoryService,
		protected injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: Category
	) {
		super(categoryService, new Category(), injector);
	}

	ngOnInit() {
		if (this.data) this.editForm();
		super.ngOnInit();
	}

	protected editForm = () => {
		this.isCreate = false;
		this.title = 'Atualizar categoria';
		this.btnSubmitLabel = 'Atualizar';
		const category = Object.assign(new Category(), this.data);
		this.resource = category;
	};

	protected buildForm = () => {
		this.resourceForm = this.formBuilder.group({
			id: [null],
			name: ['', Validators.required],
		});
	};
}
