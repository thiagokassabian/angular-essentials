import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseResourceListComponent } from 'src/app/shared/base-resources/base-resource-list.component';
import { HeaderDataService } from 'src/app/core/header/header-data.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
	selector: 'category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {
	displayedColumns: string[] = ['id', 'name', 'actions'];

	constructor(
		protected categoryService: CategoryService,
		private headerDataService: HeaderDataService,
		private dialog: MatDialog
	) {
		super(categoryService);

		this.headerDataService.headerData = {
			title: 'Categorias',
			icon: 'category',
			url: '/categories',
		};
	}

	openDialog(category?: Category) {
		let data = {};
		if (category) data = { data: category };
		const dialogRef = this.dialog.open(CategoryFormComponent, data);

		dialogRef.afterClosed().subscribe(result => {
			if (!result) this.loadResources();
		});
	}
}
