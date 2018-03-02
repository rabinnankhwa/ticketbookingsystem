import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ShowService } from './../show/services/show.service';


@Component({
	selector: 'app-shows-list',
	templateUrl: './shows-list.component.html',
	styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {

	public shows = [];

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public showService: ShowService
	) { }

	ngOnInit() {
		let theaterId = this.activatedRoute.snapshot.params.id;
		this.getShows(theaterId);
	}

	getShows(theaterId) {

		this.showService.list({ theaterId: theaterId })
			.subscribe(shows => {
				this.shows = shows;
			});
	}
}
