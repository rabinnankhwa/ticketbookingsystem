import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './../../shared/base.service';

export class Autitorium {
	_id: string;
	title: string;
	size: number;

	constructor(options: any) {
		this._id = options._id;
		this.title = options.title;
		this.size = options.size;
	}
}
@Injectable()
export class AutitoriumService {

	public url: string;

	constructor(
		public http: Http,
		public baseService: BaseService,
	) {
		this.url = this.baseService.url + 'autitorium';
	}

	create(theaterId:string,audi: Autitorium): Observable<Autitorium> {
		let body = JSON.stringify(audi);
		return this.http.post(this.url + '/' + theaterId, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	update(audi: Autitorium): Observable<Autitorium> {
		let body = JSON.stringify(audi);
		return this.http.put(this.url + '/' + audi._id, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	remove(id: string): Observable<Autitorium> {
		return this.http.delete(this.url + '/' + id, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}
}
