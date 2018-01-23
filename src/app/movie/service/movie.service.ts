import { Injectable } from '@angular/core';


import { Http, RequestOptions, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MovieService {


	private url: string = 'http://localhost:3000/api/';

	constructor(
		public http: Http
	) { }

	create(movie: any): Observable<any> {

		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });


		let body = JSON.stringify(movie);


		return this.http.post(this.url, body, options)
			.map(this.extractData)
			.catch(this.handleError)
	}

	handleError(error: any) {
		return Observable.throw(error);
	}

	extractData(res: Response) {
		const body = res.json();
		return body || {};
	}

}