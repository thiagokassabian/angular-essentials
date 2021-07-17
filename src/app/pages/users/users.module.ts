import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
	declarations: [UserListComponent, UserDetailComponent],
	imports: [
		SharedModule,
		UsersRoutingModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
	],
})
export class UsersModule {}
