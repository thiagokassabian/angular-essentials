import { HeaderDataService } from '../../templates/header/header-data.service';
import { CategoryService } from '../category.service';
import { Component } from '@angular/core';
import { Category } from '../category';
import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { MatDialog } from '@angular/material/dialog';
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
