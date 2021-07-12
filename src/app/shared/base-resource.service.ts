import { BaseResourceInterface } from './base-resource-interface';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

export abstract class BaseResourceService<T extends BaseResourceInterface> {
	private urlBase = 'http://localhost:3000';
	private http: HttpClient;
	private snackBar: MatSnackBar;

	constructor(protected resource: string, protected injector: Injector) {
		this.http = injector.get(HttpClient);
		this.snackBar = injector.get(MatSnackBar);
	}

	getAll = (): Observable<T[]> => this.http.get<T[]>(`${this.urlBase}/${this.resource}`);

	create = (resource: T): Observable<T> =>
		this.http.post<T>(`${this.urlBase}/${this.resource}`, resource).pipe(
			map(obj => obj),
			catchError(e => this.handleError(e))
		);

	delete = (id: number): Observable<T> =>
		this.http.delete<T>(`${this.urlBase}/${this.resource}/${id}`).pipe(
			map(obj => obj),
			catchError(e => this.handleError(e))
		);

	readById = (id: number): Observable<T> =>
		this.http.get<T>(`${this.urlBase}/${this.resource}/${id}`).pipe(
			map(obj => obj),
			catchError(e => this.handleError(e))
		);

	update = (resource: T): Observable<T> =>
		this.http.put<T>(`${this.urlBase}/${this.resource}/${resource.id}`, resource).pipe(
			map(obj => obj),
			catchError(e => this.handleError(e))
		);

	showMessage = (msg: string, isError: boolean = false) => {
		this.snackBar.open(msg, '', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
			panelClass: isError ? 'msg-error' : 'msg-success',
		});
	};

	handleError = (error: any): Observable<any> => {
		this.showMessage('Ocorreu um erro!', true);
		return throwError(error);
	};
}
