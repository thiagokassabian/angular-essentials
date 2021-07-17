import { BaseResourceService } from 'src/app/shared/base-resources/base-resource.service';
import { Injectable, Injector } from '@angular/core';
import { User } from './user';

@Injectable({
	providedIn: 'root',
})
export class UsersService extends BaseResourceService<User> {
	constructor(protected injector: Injector) {
		super('users', injector);
	}
}
