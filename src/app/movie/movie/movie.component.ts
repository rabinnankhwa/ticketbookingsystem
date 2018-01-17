import { Component, OnInit } from '@angular/core';
import { MovieService } from './../service/movie.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


	public movie = {
		title: '',
		releaseDate: '',
		language: '',
	};

	public movies: any = [];


	constructor(
		public movieService: MovieService
	) { }

	ngOnInit() {

	}

	submit() {

		this.movies.push(this.movie);

		this.movie = {
			title: '',
			releaseDate: '',
			language: '',
		};
	}

	remove(i) {
		this.movies.splice(i, 1);
	}




}
