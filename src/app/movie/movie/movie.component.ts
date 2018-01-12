import { Component, OnInit } from '@angular/core';
import { MovieService } from './../service/movie.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


	movies: any;

	constructor(
		public movieService: MovieService
	) { }

	ngOnInit() {
		this.movies = this.movieService.getMovies();
	}

	
}
