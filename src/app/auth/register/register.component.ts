import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	}

	constructor(
		public authService: AuthService,
		public router: Router
	) { }

	ngOnInit() {
	}

	submit() {

		this.authService.register(this.user)
			.subscribe(user => {
				console.log(user);
				this.router.navigate(['home']);
			}, e => {
				console.log(e);
			})

	}


}
