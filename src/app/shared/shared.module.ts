import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
	declarations: [PageHeaderComponent, ConfirmationComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatDialogModule,
	],
	exports: [CommonModule, ReactiveFormsModule, PageHeaderComponent, MatDialogModule],
	providers: [],
})
export class SharedModule {}
