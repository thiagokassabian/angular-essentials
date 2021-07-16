import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PageHeaderComponent } from './components/page-header/page-header.component';

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
	providers: [],
})
export class SharedModule {}
