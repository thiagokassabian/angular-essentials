import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';

import { SharedModule } from './../../shared/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
	declarations: [CategoryListComponent, CategoryFormComponent],
	imports: [
		CategoriesRoutingModule,
		SharedModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
	],
	exports: [],
	providers: [],
})
export class CategoriesModule {}
