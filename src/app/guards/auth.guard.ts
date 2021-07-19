import { AuthService } from '../pages/login/auth.service';
import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	CanLoad,
	Route,
	Router,
	RouterStateSnapshot,
	UrlSegment,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

interface ICanDeactivate {
	canDeactivate(): boolean;
}

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<ICanDeactivate> {
	// private isAuthenticated: boolean = false;

	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log(route);
		console.log(state);

		if (!this.authService.isAuthenticated) {
			this.router.navigate(['/login']);
			return false;
		}
		return true;
	}

	canDeactivate(
		component: ICanDeactivate,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		console.log(`component ${component}`);
		console.log(`currentRoute ${currentRoute}`);
		console.log(`currentState ${currentState}`);
		console.log(`nextState ${nextState}`);

		return true;
	}

	// canLoad(
	// 	route: Route,
	// 	segments: UrlSegment[]
	// ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
	// 	console.log(route);
	// 	console.log(segments);
	// 	return true;
	// }
}
