
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Show, ShowService } from './../services/show.service';
import { MovieService } from './../../movie/service/movie.service';
import { TheaterService } from './../../theater/services/theater.service';
import { Theater } from './../../theater/services/theater.service';
import { Movie } from './../../movie/service/movie.service';

@Component({
	selector: 'app-show-dialog',
	templateUrl: './show-dialog.component.html',
	styleUrls: ['./show-dialog.component.css']
})
export class ShowDialogComponent implements OnInit {

	public show: Show = new Show({});
	public dialogTitle: string = 'Add Show';
	public saving: boolean = false;

	public movies: Movie[] = [];
	public theaters: Theater[] = [];
	
	constructor(
		public showService: ShowService,
		public dialogRef: MatDialogRef<ShowDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public movieService: MovieService,
		public theaterService: TheaterService
	) { }

	ngOnInit() {

		this.getMovies();
		this.getMyTheaters();

		if (this.data._id) {
			this.show = this.data;
			this.dialogTitle = 'Update Theater'
		}
	}

	getMovies() {
		this.movieService.list()
			.subscribe(movies => {
				this.movies = movies;
			}, e => {
				console.log(e);
			})
	}

	getMyTheaters() {
		this.theaterService.list()
			.subscribe(theaters => {
				this.theaters = theaters
			}, e => {
				console.log(e);
			})
	}

	save() {
		this.saving = true;
		if (this.show._id) {
			this.update();
		} else {
			this.add();
		}
	}

	update() {
		this.showService.update(this.show)
			.subscribe(show => {
				this.dialogRef.close(show);
				this.saving = false;
			}, e => {
				this.saving = false;
				console.log(e);
			})
	}

	add() {
		this.showService.create(this.show)
			.subscribe(show => {
				this.saving = false;
				this.dialogRef.close(show);
			}, e => {
				this.saving = false;
				console.log(e);
			})
	}

}
