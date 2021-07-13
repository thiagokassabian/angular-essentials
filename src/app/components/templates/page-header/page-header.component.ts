import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
	@Output('openDialog') openDialog: EventEmitter<any> = new EventEmitter();
	@Output('applyFilter') applyFilter: EventEmitter<Event> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	openForm = () => {
		this.openDialog.emit();
	};
	filterData = (event: Event) => {
		this.applyFilter.emit(event);
	};
}
