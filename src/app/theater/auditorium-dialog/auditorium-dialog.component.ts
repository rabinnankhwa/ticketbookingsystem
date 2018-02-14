import { Component, OnInit, Inject } from '@angular/core';
import { AutitoriumService, Autitorium } from './../services/autitorium.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
	selector: 'app-auditorium-dialog',
	templateUrl: './auditorium-dialog.component.html',
	styleUrls: ['./auditorium-dialog.component.css']
})
export class AuditoriumDialogComponent implements OnInit {

	public dialogTitle = "Add auditorium";

	public audi: Autitorium = new Autitorium({});

	public theaterId: string;

	constructor(
		public autitoriumService: AutitoriumService,
		public dialogRef: MatDialogRef<AuditoriumDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	ngOnInit() {
		this.theaterId = this.data.theater._id;
		if (this.data.audi) {
			this.audi = this.data.audi;
		}
	}

	save() {
		if (this.audi._id) {
			this.update();
		} else {
			this.create();
		}
	}

	update() {
		this.autitoriumService.update(this.theaterId, this.audi)
			.subscribe(audi => {
				this.dialogRef.close(audi);
			})
	}

	create() {
		this.autitoriumService.create(this.theaterId, this.audi)
			.subscribe(audi => {
				this.dialogRef.close(audi);
			})
	}
}
