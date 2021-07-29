import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public message: string) {}

	ngOnInit(): void {
		console.log(this.message);
	}
}
