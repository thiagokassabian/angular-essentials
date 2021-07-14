import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BaseResourceInterface } from './base-resource-interface';
import { Directive, Injector, OnDestroy, OnInit } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceInterface>
	implements OnInit, OnDestroy
{
	protected dialog: MatDialog;
	protected formBuilder: FormBuilder;
	resourceForm: FormGroup;
	submittingForm: boolean = false;
	isCreate: boolean;
	private createSubscription: Subscription;
	private updateSubscription: Subscription;
	//private loadResourceSubscription: Subscription;

	constructor(
		protected baseResourceService: BaseResourceService<T>,
		public resource: T,
		protected injector: Injector
	) {
		this.dialog = injector.get(MatDialog);
		this.formBuilder = injector.get(FormBuilder);
	}
	ngOnInit() {
		this.buildForm();
		if (!this.isCreate) this.loadResource();
	}

	private loadResource = () => {
		this.resourceForm.patchValue(this.resource);
	};

	submitForm = () => {
		this.submittingForm = true;
		if (this.isCreate) this.create();
		else this.update();
	};

	private create = () => {
		this.createSubscription = this.baseResourceService
			.create(this.resourceForm.value)
			.subscribe(() => {
				this.submittingForm = false;
				this.actionsSuccess('Cadastrado com sucesso');
			});
	};

	//* Método comentado pois não está sendo usado por enquanto
	// loadResource = (id: number) => {
	// 	this.loadResourceSubscription = this.baseResourceService
	// 		.readById(id)
	// 		.subscribe(response => {
	// 			this.resource = response;
	// 		});
	// };

	private update = () => {
		this.updateSubscription = this.baseResourceService
			.update(this.resourceForm.value)
			.subscribe(() => {
				this.submittingForm = false;
				this.actionsSuccess('Atualizado com sucesso');
			});
	};

	private actionsSuccess = (msg: string) => {
		this.baseResourceService.showMessage(msg);
		this.dialog.closeAll();
	};

	protected abstract buildForm(): void;

	ngOnDestroy() {
		if (this.createSubscription) this.createSubscription.unsubscribe();
		if (this.updateSubscription) this.updateSubscription.unsubscribe();
		// if (this.loadResourceSubscription) this.loadResourceSubscription.unsubscribe();
	}
}
