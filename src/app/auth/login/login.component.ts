import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user = {
		email: '',
		password: ''
	}

	constructor(
		public authService:AuthService
	) { }

	ngOnInit() {
	}

	submit(){
		this.authService.login(this.user)
			.subscribe(user=>{
				
			},e=>{

			});

	}
}
