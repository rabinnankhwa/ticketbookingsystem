import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { User, UserService } from './../services/user.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	public users: User[] = [];
	public loading: boolean = false;

	constructor(
		public dialog: MatDialog,
		public userService: UserService,
	) { }

	ngOnInit() {
		this.getUsers();
	}

	getUsers() {		
		this.userService.list()
			.subscribe(users => {
				this.users = users;
				this.loading = false;
			}, e => {
				console.log(e);
				this.loading = false;
			});
	}

	update(user, i) {

		let data = {};
		Object.assign(data, user)
		let dialogRef = this.dialog.open(UserDialogComponent, {
			width: '450px',
			data: data
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.users.splice(i, 1, result);
			}
		});

	}
}
