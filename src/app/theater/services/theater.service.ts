import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './../../shared/base.service';

export class Theater {
	_id: string;
	title: string;
	address: string;
	size: number;

	constructor(options: any) {
		this._id = options._id;
		this.title = options.title;
		this.address = options.address;
		this.size = options.size;
	}
}
@Injectable()
export class TheaterService {

	public url: string;

	constructor(
		public http: Http,
		public baseService: BaseService,
	) {
		this.url = this.baseService.url + 'theater';
	}

	list(): Observable<Theater[]> {
		return this.http.get(this.url, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	myList(): Observable<Theater[]> {
		return this.http.get(this.url+'/my-theater', this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	

	create(theater: Theater): Observable<Theater> {
		let body = JSON.stringify(theater);
		return this.http.post(this.url, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	update(theater: Theater): Observable<Theater> {
		let body = JSON.stringify(theater);
		return this.http.put(this.url + '/' + theater._id, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	remove(id: string): Observable<Theater> {
		return this.http.delete(this.url + '/' + id, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}
}
