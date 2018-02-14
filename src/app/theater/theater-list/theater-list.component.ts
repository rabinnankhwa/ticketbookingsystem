import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Theater, TheaterService } from './../services/theater.service';
import { TheaterDialogComponent } from './../theater-dialog/theater-dialog.component';
import { AuditoriumDialogComponent } from './../auditorium-dialog/auditorium-dialog.component';

@Component({
	selector: 'app-theater-list',
	templateUrl: './theater-list.component.html',
	styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {

	public theaters: Theater[] = [];
	public loading: boolean = false;

	constructor(
		public theaterService: TheaterService,
		public dialog: MatDialog
	) { }

	ngOnInit() {
		this.getTheaters();
	}

	getTheaters() {
		this.loading = true;
		this.theaterService.list()
			.subscribe(theaters => {
				this.theaters = theaters;
				this.loading = false;
			})
	}

	add(): void {
		let dialogRef = this.dialog.open(TheaterDialogComponent, {
			width: '450px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.theaters.push(result);
			}
		});
	}

	udpate(theater, i) {

		let data = {};
		Object.assign(data, theater)
		let dialogRef = this.dialog.open(TheaterDialogComponent, {
			width: '450px',
			data: data
		});

		dialogRef.afterClosed().subscribe(result => {

			if (result) {

				this.theaters.splice(i, 1, result);
			}
		});

	}

	remove(id, i) {
		this.theaterService.remove(id)
			.subscribe(theater => {

				this.theaters.splice(i, 1);
			}, e => {
				console.log(e);
			})
	}

	addAuditorium(theater) {
		let dialogRef = this.dialog.open(AuditoriumDialogComponent, {
			width: '450px',
			data: { theater: theater, audi: {} }
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.theaters.push(result);
			}
		});
	}


}
