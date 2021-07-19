import { SidenavService } from '../sidenav/sidenav.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderDataService } from './header-data.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	toggleMenu: boolean = true;

	constructor(
		private headerDataService: HeaderDataService,
		private sidenavService: SidenavService
	) {}

	sidenavToggle() {
		this.sidenavService.toggle();
	}

	get title(): string {
		return this.headerDataService.headerData.title;
	}
	get icon(): string {
		return this.headerDataService.headerData.icon;
	}
	get url(): string {
		return this.headerDataService.headerData.url;
	}
}
