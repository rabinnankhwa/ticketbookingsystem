import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TheaterService, Theater } from './../theater/services/theater.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public theaters: Theater[] = [];

	constructor(
		public theaterService: TheaterService,
		public router: Router
	) { }

	ngOnInit() {
		this.getTheaters();
	}

	getTheaters() {
		this.theaterService.list()
			.subscribe(theaters => {
				this.theaters = theaters;
			}, e => {
				console.log(e);
			})
	}


	showDetails(theaterId) {
		this.router.navigate(['shows-lsit', theaterId]);
	}

}
