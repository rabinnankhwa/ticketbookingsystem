import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MovieService {

	private url: string = 'http://localhost:3000/api/movie';

	constructor(
		public http: Http
	) { }

	/**
	 * Create movie
	 * @param movie 
	 */
	create(movie: any): Observable<any> {
		let body = JSON.stringify(movie);
		return this.http.post(this.url, body, this.getOptions())
			.map(this.extractData)
			.catch(this.handleError)
	}

	/**
	 *Get list of movies.
	 */
	list(): Observable<any> {
		return this.http.get(this.url, this.getOptions())
			.map(this.extractData)
			.catch(this.handleError);
	}

	/**
	 * Remove movie item.
	 */
	remove(id: string): Observable<any> {
		return this.http.delete(this.url + '/' + id, this.getOptions())
			.map(this.extractData)
			.catch(this.handleError);
	}

	update(movie: any): Observable<any> {
		let body = JSON.stringify(movie);
		return this.http.put(this.url + '/' + movie._id, body, this.getOptions())
			.map(this.extractData)
			.catch(this.handleError);
	}

	handleError(error: any) {
		return Observable.throw(error);
	}

	extractData(res: Response) {
		const body = res.json();
		return body || {};
	}

	getOptions() {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return options;
	}

} 