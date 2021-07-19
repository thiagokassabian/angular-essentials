import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../users/user';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _isAuthenticated: boolean = false;
	private _menu = new BehaviorSubject<boolean>(false);
	public readonly showMenu = this._menu.asObservable();

	constructor(private http: HttpClient) {}

	get isAuthenticated(): boolean {
		return this._isAuthenticated;
	}
	set isAuthenticated(value: boolean) {
		this._isAuthenticated = value;
	}

	set menu(value: boolean) {
		this._menu.next(value);
		this._menu.complete();
	}

	get menu(): boolean {
		return this._menu.value;
	}

	getUser = (username: string, password: string): Observable<User> =>
		this.http.get(`http://localhost:3000/users?username=${username}&password=${password}`);
}
