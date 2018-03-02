import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { BaseService } from './../../shared/base.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export class User {
	_id: string;
	name: string;
	email: string;
	userType: string;

	constructor(options: any) {
		this._id = options._id || '';
		this.name = options.name || '';
		this.email = options.email || '';
		this.userType = options.userType || '';
	}

};


@Injectable()
export class UserService {

	private url: string;

	constructor(
		public http: Http,
		public baseService: BaseService
	) {
		this.url = this.baseService.url + 'user';
	}

	/**
	 *Get list of movies.
	 */
	list(): Observable<any> {
		return this.http.get(this.url, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	/**
	 * Remove movie item.
	 */
	remove(id: string): Observable<any> {
		return this.http.delete(this.url + '/' + id, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	update(movie: any): Observable<any> {
		let body = JSON.stringify(movie);
		return this.http.put(this.url + '/' + movie._id, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

} 