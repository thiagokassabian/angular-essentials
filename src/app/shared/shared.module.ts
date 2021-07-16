import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorIntl } from '@angular/material/paginator';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginatorIntl } from './components/paginator-intl/paginator-intl';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [PageHeaderComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
	],
	exports: [CommonModule, ReactiveFormsModule, PageHeaderComponent],
	providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class SharedModule {}
