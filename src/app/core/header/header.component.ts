import { SidenavService } from '../sidenav/sidenav.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderDataService } from './header-data.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(
		private headerDataService: HeaderDataService,
		private sidenavService: SidenavService
	) {}

	toggleSidenav() {
		this.sidenavService.toggleSidebarVisibility();
		this.sidenavService.toggle();
	}

	get isSidebarVisible(): boolean {
		return this.sidenavService.isSidebarVisible;
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
