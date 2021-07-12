import { BaseResourceInterface } from './base-resource-interface';
import { Directive, OnInit, ViewChild, AfterViewInit, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceInterface>
	implements OnInit, AfterViewInit
{
	resources: T[] = [];
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	dataSource = new MatTableDataSource();

	constructor(protected baseResourceService: BaseResourceService<T>) {}

	ngOnInit(): void {
		this.loadResources();
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	loadResources = () => {
		this.baseResourceService.getAll().subscribe(response => {
			this.resources = response;
			this.dataSource.data = this.resources;
		});
	};

	delete = (id: number) => {
		this.baseResourceService.delete(id).subscribe(() => {
			this.baseResourceService.showMessage('Excluído com sucesso');
			this.resources = this.resources.filter(el => el.id !== id);
			this.dataSource.data = this.resources;
		});
	};
}
