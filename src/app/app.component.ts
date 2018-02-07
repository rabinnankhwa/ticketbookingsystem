import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


	public currentUser: any = {};

	constructor(
		public router: Router,
		public authService: AuthService
	) {

	}

	ngOnInit() {
		this.currentUser = this.authService.getUser();
	}


	login() {
		this.router.navigate(['login']);
	}


	register() {
		this.router.navigate(['register']);
	}
}
