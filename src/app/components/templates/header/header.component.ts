import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderDataService } from './header-data.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Output() toggleSidenav = new EventEmitter();

	toggleMenu: boolean = false

	constructor(private headerDataService: HeaderDataService) { }

	ngOnInit(): void {
	}

	sidenavToggle() {
		this.toggleSidenav.emit()
		this.toggleMenu = !this.toggleMenu
	}

	get title(): string {
		return this.headerDataService.headerData.title
	}
	get icon(): string {
		return this.headerDataService.headerData.icon
	}
	get url(): string {
		return this.headerDataService.headerData.url
	}


}
