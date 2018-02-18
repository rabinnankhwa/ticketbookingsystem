
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Show, ShowService } from './../services/show.service';
import { ShowDialogComponent } from './../show-dialog/show-dialog.component';
import { SeatDialogComponent } from './../seat-dialog/seat-dialog.component';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {


	public shows: Show[] = [];
	public loading: boolean = false;

	constructor(
		public showService: ShowService,
		public dialog: MatDialog,
	) { }

	ngOnInit() {
		this.getShows();
	}

	getShows() {
		this.loading = true;
		this.showService.list({})
			.subscribe(shows => {
				this.shows = shows;
				this.loading = false;
			})
	}

	add(): void {
		let dialogRef = this.dialog.open(ShowDialogComponent, {
			width: '450px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.shows.push(result);
			}
		});
	}

	udpate(theater, i) {

		let data = {};
		Object.assign(data, theater)
		let dialogRef = this.dialog.open(ShowDialogComponent, {
			width: '450px',
			data: data
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.shows.splice(i, 1, result);
			}
		});

	}

	remove(id, i) {
		this.showService.remove(id)
			.subscribe(show => {
				this.shows.splice(i, 1);
			}, e => {
				console.log(e);
			})
	}

	udpateSeat(show, i, seat) {

		let data = {};
		Object.assign(data, seat)
		let dialogRef = this.dialog.open(SeatDialogComponent, {
			width: '450px',
			data: { show: show, seat: data }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				show.seats.splice(i, 1, result);
			}
		});

	}

	removeShow(show, i, seat) {
		show.seats.splice(i, 1);

	}

	addSeat(show) {
		let dialogRef = this.dialog.open(SeatDialogComponent, {
			width: '450px',
			data: { show: show, seat: {} }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				show.seats.push(result);
				this.updateShow(show);
			}
		});
	}


	updateShow(show) {
		this.showService.update(show)
			.subscribe(show => {
				debugger;
			}, e => {
				console.log(e);
			})
	}
}
