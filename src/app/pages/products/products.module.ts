import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { SharedModule } from './../../shared/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
	imports: [
		ProductsRoutingModule,
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
		CurrencyMaskModule,
	],
	exports: [],
	declarations: [ProductListComponent, ProductFormComponent],
	providers: [],
})
export class ProductsModule {}
