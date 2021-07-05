import { HeaderDataService } from '../../templates/header/header-data.service';
import { ProductService } from '../product.service';
import { Component } from '@angular/core';
import { Product } from '../product';
import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseResourceListComponent<Product> {
	displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

	constructor(
		protected productService: ProductService,
		private headerDataService: HeaderDataService,
		private dialog: MatDialog
	) {
		super(productService)

		this.headerDataService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			url: '/products',
		}
	}

	openDialog(id: number | null) {
		let data = {}
		if (id) data = { data: id }
		const dialogRef = this.dialog.open(ProductFormComponent, data);

		dialogRef.afterClosed().subscribe(result => {
			if (!result) this.loadResources()
		})
	}

}