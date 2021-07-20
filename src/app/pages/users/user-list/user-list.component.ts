import { HeaderDataService } from './../../../core/header/header-data.service';
import { UsersService } from './../users.service';
import { BaseResourceListComponent } from 'src/app/shared/base-resources/base-resource-list.component';
import { Component, OnInit, Injector } from '@angular/core';
import { User } from '../user';

@Component({
	selector: 'user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent extends BaseResourceListComponent<User> implements OnInit {
	constructor(
		protected usersService: UsersService,
		private headerDataService: HeaderDataService,
		protected injector: Injector
	) {
		super(usersService, injector);

		this.headerDataService.headerData = {
			title: 'Usuários',
			icon: 'group',
			url: '/users',
		};
	}

	ngOnInit() {
		super.ngOnInit();
	}
}
