import { BaseResourceInterface } from './base-resource-interface';
import { Directive, Injector, OnInit } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Directive()
export abstract class BaseResourceListComponent<T extends BaseResourceInterface> implements OnInit {
	// resources: T[] = [];
	protected route: ActivatedRoute;
	protected router: Router;

	constructor(protected baseResourceService: BaseResourceService<T>, public resource: T, protected injector: Injector) {
		this.route = injector.get(ActivatedRoute)
		this.router = injector.get(Router)
	}

	ngOnInit(): void {
		// this.loadResources()
	}

	// loadResources = () => {
	// 	this.baseResourceService.getAll().subscribe(response => {
	// 		this.resources = response
	// 	})
	// }

	create = (resource: T) => {
		this.baseResourceService.create(resource).subscribe(response => {
			this.actionsSuccess('Produto cadastrado com sucesso')
		})
	}

	readById = (id: string) => {
		this.baseResourceService.readById(id).subscribe(response => {
			this.resource = response
		})
	}

	update = (resource: T) => {
		this.baseResourceService.update(resource).subscribe(response => {
			this.actionsSuccess('Produto atualizado com sucesso')
		})
	}

	back() {
		const path = this.route.snapshot.url[0].path
		this.router.navigate([path])
	}

	actionsSuccess = (msg: string) => {
		this.baseResourceService.showMessage(msg)
		const path = this.route.snapshot.url[0].path
		this.router.navigate([path])
	}

}
