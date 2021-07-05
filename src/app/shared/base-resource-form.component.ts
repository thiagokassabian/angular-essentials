import { MatDialog } from '@angular/material/dialog';
import { BaseResourceInterface } from './base-resource-interface';
import { Directive, Injector } from '@angular/core';
import { BaseResourceService } from './base-resource.service';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceInterface> {
	protected dialog: MatDialog;

	constructor(
		protected baseResourceService: BaseResourceService<T>,
		public resource: T,
		protected injector: Injector
	) {
		this.dialog = injector.get(MatDialog)
	}

	submit = (resource: T) => {
		if (!resource.id) this.create(resource)
		else this.update(resource)
	}

	create = (resource: T) => {
		this.baseResourceService.create(resource).subscribe(() => {
			this.actionsSuccess('Produto cadastrado com sucesso')
		})
	}

	loadResource = (id: string) => {
		this.baseResourceService.readById(id).subscribe(response => {
			this.resource = response
		})
	}

	update = (resource: T) => {
		this.baseResourceService.update(resource).subscribe(() => {
			this.actionsSuccess('Produto atualizado com sucesso')
		})
	}

	actionsSuccess = (msg: string) => {
		this.baseResourceService.showMessage(msg)
		this.dialog.closeAll()
	}

}
