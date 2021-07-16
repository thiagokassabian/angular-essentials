import { Component } from '@angular/core';

import { HeaderDataService } from 'src/app/core/header/header-data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(protected headerDataService: HeaderDataService) {
		headerDataService.headerData = {
			title: 'Início',
			icon: 'home',
			url: '/',
		};
	}
}
