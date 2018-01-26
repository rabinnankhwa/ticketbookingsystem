import { Component, OnInit } from '@angular/core';
import { MovieService } from './../service/movie.service';

@Component({
	selector: 'app-movie',
	templateUrl: './movie.component.html',
	styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


	public movie = {
		_id: '',
		title: '',
		releaseDate: '',
		language: '',
	};

	public movies: any = [];


	constructor(
		public movieService: MovieService
	) { }

	ngOnInit() {
		this.getMovies();
	}

	getMovies() {
		this.movieService.list()
			.subscribe(movies => {
				this.movies = movies;
			}, e => {
				console.log(e);
			})
	}

	submit() {

		if (this.movie._id) {
			this.updateMovie();
		} else {
			this.createMovie();
		}

	}

	createMovie() {
		this.movieService.create(this.movie)
			.subscribe(movie => {
				this.movies.push(movie);
				this.resetForm()
			}, e => {
				console.log(e);
			});
	}

	resetForm() {
		this.movie = {
			_id: '',
			title: '',
			releaseDate: '',
			language: '',
		};
	}

	remove(id: string, i) {
		this.movieService.remove(id)
			.subscribe(movie => {
				this.movies.splice(i, 1);
			}, e => {
				console.log(e);
			})
	}

	update(movie: any) {
		this.movie = movie;
	}

	updateMovie() {
		this.movieService.update(this.movie)
			.subscribe(movie => {
				this.resetForm();
			}, e => {
				console.log(e);
			})
	}




}
