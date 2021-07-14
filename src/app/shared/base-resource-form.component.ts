import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BaseResourceInterface } from './base-resource-interface';
import { Directive, Injector, OnDestroy } from '@angular/core';
import { BaseResourceService } from './base-resource.service';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceInterface>
	implements OnDestroy
{
	protected dialog: MatDialog;
	private createSubscription: Subscription;
	private loadResourceSubscription: Subscription;
	private updateSubscription: Subscription;

	constructor(
		protected baseResourceService: BaseResourceService<T>,
		public resource: T,
		protected injector: Injector
	) {
		this.dialog = injector.get(MatDialog);
	}

	submit = (resource: T) => {
		if (!resource.id) this.create(resource);
		else this.update(resource);
	};

	create = (resource: T) => {
		this.createSubscription = this.baseResourceService.create(resource).subscribe(() => {
			this.actionsSuccess('Cadastrado com sucesso');
		});
	};

	loadResource = (id: number) => {
		this.loadResourceSubscription = this.baseResourceService
			.readById(id)
			.subscribe(response => {
				this.resource = response;
			});
	};

	update = (resource: T) => {
		this.updateSubscription = this.baseResourceService.update(resource).subscribe(() => {
			this.actionsSuccess('Atualizado com sucesso');
		});
	};

	actionsSuccess = (msg: string) => {
		this.baseResourceService.showMessage(msg);
		this.dialog.closeAll();
	};

	ngOnDestroy() {
		if (this.createSubscription) this.createSubscription.unsubscribe();
		if (this.loadResourceSubscription) this.loadResourceSubscription.unsubscribe();
		if (this.updateSubscription) this.updateSubscription.unsubscribe();
	}
}
