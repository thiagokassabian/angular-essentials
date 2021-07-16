import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from './../../shared/shared.module';

import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	imports: [HomeRoutingModule, SharedModule, MatCardModule],
	exports: [MatCardModule],
	declarations: [HomeComponent],
	providers: [],
})
export class HomeModule {}
