import { HeaderDataService } from './../../templates/header/header-data.service';
import { ProductService } from '../product.service';
import { Component, OnInit, AfterViewInit, Input, ViewChild, Injector } from '@angular/core';
import { Product } from '../product';
import { BaseResourceListComponent } from 'src/app/shared/base-resource-list.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'product-read',
	templateUrl: './product-read.component.html',
	styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent extends BaseResourceListComponent<Product> implements AfterViewInit {
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	products: Product[] = [];
	dataSource = new MatTableDataSource()
	displayedColumns: string[] = ['id', 'name', 'price', 'actions'];

	constructor(protected productService: ProductService, protected injector: Injector, private headerDataService: HeaderDataService) {
		super(productService, new Product(), injector)

		headerDataService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			url: '/products',
		}
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	ngOnInit(): void {
		this.loadResources()
	}

	loadResources = () => {
		this.baseResourceService.getAll().subscribe(response => {
			this.products = response
			this.dataSource.data = this.products
		})
	}

	delete = (id: number) => {
		this.baseResourceService.delete(id).subscribe(() => {
			this.baseResourceService.showMessage('Excluído com sucesso')
			this.products = this.products.filter(el => el.id !== id)
			this.dataSource.data = this.products
		})
	}

}