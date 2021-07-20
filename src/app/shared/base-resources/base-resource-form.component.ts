import { Directive, Injector, OnDestroy, OnInit, HostListener, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { BaseResourceInterface } from './base-resource-interface';
import { BaseResourceService } from './base-resource.service';
import { ConfirmationComponent } from '../components/confirmation/confirmation.component';

export interface ComponentType<C = any> {
	new (...args: any[]): C;
}

@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceInterface>
	implements OnInit, OnDestroy
{
	protected dialog: MatDialog;
	protected dialogRef: MatDialogRef<ComponentType>;
	protected formBuilder: FormBuilder;
	resourceForm: FormGroup;
	submittingForm: boolean = false;
	protected isCreate: boolean = true;
	private createSubscription: Subscription;
	private updateSubscription: Subscription;
	private backdropSubscription: Subscription;
	@HostListener('window:keyup.esc') onKeyUp() {
		this.dialogRef.close();
	}

	constructor(
		protected baseResourceService: BaseResourceService<T>,
		public resource: T,
		protected injector: Injector,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.formBuilder = injector.get(FormBuilder);
		this.dialog = injector.get(MatDialog);
		this.dialogRef = injector.get(MatDialogRef);
	}
	ngOnInit() {
		this.buildForm();
		if (this.data) this.loadResource();
		this.dialogRefConfig();
	}

	private dialogRefConfig = () => {
		this.dialogRef.disableClose = true;
		this.backdropSubscription = this.dialogRef.backdropClick().subscribe(() => {
			const form = this.resourceForm;
			const hasValue = Object.keys(form.value).some(k => !!form.value[k]);
			if (form.dirty && hasValue) {
				this.confirmCloseDialog();
			} else {
				this.dialogRef.close();
			}
		});
	};

	protected loadResource = () => {
		this.isCreate = false;
		this.resource = Object.assign(this.resource, this.data);
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
		this.dialogRef.close();
	};

	protected confirmCloseDialog = () => {
		let dialogRef = this.dialog.open(ConfirmationComponent);

		dialogRef.afterClosed().subscribe(confirm => {
			if (confirm) this.dialogRef.close();
		});
	};

	protected abstract buildForm(): void;

	ngOnDestroy() {
		if (this.createSubscription) this.createSubscription.unsubscribe();
		if (this.updateSubscription) this.updateSubscription.unsubscribe();
		if (this.backdropSubscription) this.backdropSubscription.unsubscribe();
		// if (this.loadResourceSubscription) this.loadResourceSubscription.unsubscribe(); //* método subscribe comentado
	}
}
