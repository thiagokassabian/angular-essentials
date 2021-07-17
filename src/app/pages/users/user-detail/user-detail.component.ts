import { Subscription } from 'rxjs';
import { UsersService } from './../users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
	selector: 'user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
	user: User;
	subscription: Subscription;

	constructor(private usersService: UsersService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.loadResource();
	}

	loadResource = () => {
		this.subscription = this.route.params.subscribe(param => {
			this.usersService.readById(param.id).subscribe(user => {
				this.user = user;
			});
		});
	};

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
