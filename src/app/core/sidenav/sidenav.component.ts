import { SidenavService } from './sidenav.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
	constructor(private router: Router, private sidenavService: SidenavService) {}

	ngAfterViewInit(): void {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) this.sidenavService.close();
		});
	}

	ngOnInit() {}
}
