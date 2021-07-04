import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface HeaderData {
	title: string
	icon: string
	url: string
}

@Injectable({
	providedIn: 'root'
})
export class HeaderDataService {
	private _headerData = new BehaviorSubject<HeaderData>({
		title: 'Início',
		icon: 'home',
		url: '/'
	})

	constructor() { }

	get headerData(): HeaderData {
		return this._headerData.value
	}

	set headerData(value: HeaderData) {
		this._headerData.next(value)
	}
}
