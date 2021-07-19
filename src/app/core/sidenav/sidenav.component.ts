import { SidenavService } from './sidenav.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
	constructor(private router: Router, private sidenav: SidenavService) {}

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) this.sidenav.close();
		});
	}
}
