import { AuthService } from './pages/login/auth.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './core/sidenav/sidenav.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'frontend';
	showMenu: boolean = false;
	@ViewChild('sidenav') public sidenav: MatSidenav;

	constructor(private authService: AuthService, private sidenavService: SidenavService) {}

	ngOnInit() {
		this.authService.showMenu.subscribe(response => {
			console.log(response);
			this.showMenu = response;
		});
	}

	ngAfterViewInit() {
		this.sidenavService.setSidenav(this.sidenav);
	}
}
