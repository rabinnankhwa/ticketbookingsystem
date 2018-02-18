
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../shared/base.service';

export class Show {
	_id: string;
	title: string;
	date: string;
	movie: string;
	theater: any;
	seats: any;

	constructor(options: any) {
		this._id = options._id || '';
		this.title = options.title || '';
		this.date = options.date || '';
		this.movie = options.movie || '';
		this.theater = options.theater || { theater: '', theaterName: '', auditoriumName: '' };
		this.seats = options.seats || [];
	}
}


@Injectable()
export class ShowService {

	public url: string;

	constructor(
		public http: Http,
		public baseService: BaseService,
	) {
		this.url = this.baseService.url + 'show';
	}


	list(query: any): Observable<Show[]> {
		return this.http.get(this.url + this.baseService.getQueryString(query) + query.theateriD, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	create(theater: Show): Observable<Show> {
		let body = JSON.stringify(theater);
		return this.http.post(this.url, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	update(theater: Show): Observable<Show> {
		let body = JSON.stringify(theater);
		return this.http.put(this.url + '/' + theater._id, body, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}

	remove(id: string): Observable<Show> {
		return this.http.delete(this.url + '/' + id, this.baseService.getOptions())
			.map(this.baseService.extractData)
			.catch(this.baseService.handleError);
	}
}
