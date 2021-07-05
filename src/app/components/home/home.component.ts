import { HeaderDataService } from '../templates/header/header-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	constructor(protected headerDataService: HeaderDataService) {
		headerDataService.headerData = {
			title: 'Início',
			icon: 'home',
			url: '/',
		}
	}

}
