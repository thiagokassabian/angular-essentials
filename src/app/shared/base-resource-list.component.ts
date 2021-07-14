import { Subscription } from 'rxjs';
import { BaseResourceInterface } from './base-resource-interface';
import { Directive, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceInterface>
	implements OnInit, AfterViewInit, OnDestroy
{
	resources: T[];
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	@ViewChild(MatSort) sort!: MatSort;
	dataSource = new MatTableDataSource();
	private loadResourcesSubscription: Subscription;
	private deleteSubscription: Subscription;

	constructor(protected baseResourceService: BaseResourceService<T>) {}

	ngOnInit() {
		this.loadResources();
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	protected loadResources = () => {
		this.loadResourcesSubscription = this.baseResourceService.getAll().subscribe(response => {
			this.resources = response;
			this.dataSource.data = this.resources;
		});
	};

	delete = (id: number) => {
		this.deleteSubscription = this.baseResourceService.delete(id).subscribe(() => {
			this.baseResourceService.showMessage('Excluído com sucesso');
			this.resources = this.resources.filter(el => el.id !== id);
			this.dataSource.data = this.resources;
		});
	};

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	ngOnDestroy() {
		if (this.loadResourcesSubscription) this.loadResourcesSubscription.unsubscribe();
		if (this.deleteSubscription) this.deleteSubscription.unsubscribe();
	}
}
