import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
	@Output('openDialog') openDialog: EventEmitter<any> = new EventEmitter();
	@Output('applyFilter') applyFilter: EventEmitter<Event> = new EventEmitter();

	constructor() {}

	openForm = () => {
		this.openDialog.emit();
	};
	filterData = (event: Event) => {
		this.applyFilter.emit(event);
	};
}
