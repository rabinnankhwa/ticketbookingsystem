
import { Component, OnInit, Inject } from '@angular/core';
import { ShowService, Show } from './../services/show.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-seat-dialog',
	templateUrl: './seat-dialog.component.html',
	styleUrls: ['./seat-dialog.component.css']
})
export class SeatDialogComponent implements OnInit {

	public dialogTitle = "Add auditorium";

	public seat: any= {
		name: '',
        price: '',        
	}

	public theaterId: string;

	constructor(
		public showService: ShowService,
		public dialogRef: MatDialogRef<SeatDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	ngOnInit() {		
		if (this.data.seat) {
			this.seat = this.data.seat;
		}
	}

	save() {
		if (this.seat._id) {
			this.update();
		} else {
			this.create();
		}
	}

	update() {
		// this.show.update(this.theaterId, this.audi)
		// 	.subscribe(audi => {
				this.dialogRef.close(this.seat);
			// })
	}

	create() {
		// this.autitoriumService.create(this.theaterId, this.audi)
		// 	.subscribe(audi => {
				this.dialogRef.close(this.seat);
			// })
	}
}
