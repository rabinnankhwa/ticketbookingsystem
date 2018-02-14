import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Theater, TheaterService } from './../services/theater.service';

@Component({
	selector: 'app-theater-dialog',
	templateUrl: './theater-dialog.component.html',
	styleUrls: ['./theater-dialog.component.css']
})
export class TheaterDialogComponent implements OnInit {

	public theater: Theater = new Theater({});
	public theaters: Theater[] = [];
	public dialogTitle: string = 'Add Theater';
	public saving: boolean = false;

	constructor(
		public theaterService: TheaterService,
		public dialogRef: MatDialogRef<TheaterDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	ngOnInit() {
		if (this.data._id) {
			this.theater = this.data;
			this.dialogTitle = 'Update Theater'
		}
	}

	save() {
		this.saving = true;
		if (this.theater._id) {
			this.update();
		} else {
			this.add();
		}
	}

	update() {
		this.theaterService.update(this.theater)
			.subscribe(theater => {
				this.dialogRef.close(theater);
				this.saving = false;
			}, e => {
				this.saving = false;
				console.log(e);
			})
	}

	add() {
		this.theaterService.create(this.theater)
			.subscribe(audi => {
				this.saving = false;
				this.dialogRef.close(audi);
			}, e => {
				this.saving = false;
				console.log(e);
			})
	}

}
