import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SidenavService {
	private sidenav: MatSidenav;
	isSidebarVisible: boolean;

	sidebarVisibilityChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor() {
		this.sidebarVisibilityChange.subscribe(value => {
			this.isSidebarVisible = value;
		});
	}

	toggleSidebarVisibility = (value?: boolean) => {
		this.sidebarVisibilityChange.next(value || !this.isSidebarVisible);
	};

	setSidenav = (sidenav: MatSidenav) => {
		this.sidenav = sidenav;
	};

	open = () => {
		if (!this.isSidebarVisible) this.toggleSidebarVisibility();
		return this.sidenav.open();
	};

	close = () => {
		if (this.isSidebarVisible) this.toggleSidebarVisibility();
		return this.sidenav.close();
	};

	toggle = () => {
		this.sidenav.toggle();
	};
}
