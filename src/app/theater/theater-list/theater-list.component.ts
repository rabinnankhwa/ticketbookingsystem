import { Component, OnInit } from '@angular/core';
import { Theater, TheaterService } from './../serices/theater.service';

@Component({
	selector: 'app-theater-list',
	templateUrl: './theater-list.component.html',
	styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {

	public theaters: Theater[] = [];
	public loading: boolean = false;

	constructor(
		public theaterService: TheaterService
	) { }

	ngOnInit() {
		this.getTheaters();
	}

	getTheaters() {
		this.theaterService.list()
			.subscribe(theaters => {
				this.theaters = theaters;
				this.loading = false;
			})
	}

}
