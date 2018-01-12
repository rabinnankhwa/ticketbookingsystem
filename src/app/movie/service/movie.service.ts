import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

	constructor() { }

	movies = [
		{
			name: 'Kalo Pothi',
			starring: [
				{
					name: 'Min Bahadur Bham',
					role: 'Director',
				}, {
					name: 'Sunil Chaudhary ',
					role: 'Lead Actor'
				}
			]
		}, {
			name: 'Rato Bhale',
			starring: [
				{
					name: 'Samin',
					role: 'Singer'
				}, {
					name: 'sonu',
					role: 'Director'
				}
			]
		}];

	public getMovies() {
		return this.movies;
	}

}


