import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { AuthService, User } from './auth/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	public user: any = new User({});

	public isLogin: boolean = false;
	public isSuperAdmin: boolean = false;
	public isUser: boolean = false;
	public isTheaterAdmin: boolean = false;

	constructor(
		public router: Router,
		public authService: AuthService,
		changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.authService.userDataChanged$
			.subscribe(data => {
				// call function 
				this.checkLoginData();
			});

	}

	ngOnInit() {
		this.checkLoginData();
	}

	// do necessary things in event. like check user type etc.
	/**
	 * Check if user is login
	 * if yes find user type.
	 */
	checkLoginData() {

		if (this.authService.isLoggedIn()) {

			this.isLogin = true;
			this.user = this.authService.getUser();

			if (this.user.userType == '1') {
				this.isUser = true;
			}

			if (this.user.userType == '2') {
				this.isTheaterAdmin = true;
			}

			if (this.user.userType == '3') {
				this.isSuperAdmin = true;
			}

		} else {
			this.isLogin = false;
			this.isUser = false;
			this.isTheaterAdmin = false;
			this.isSuperAdmin = false;
			this.user = new User({});
		}
	}

	login() {
		this.router.navigate(['login']);
	}


	register() {
		this.router.navigate(['register']);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	logout() {
		this.authService.logout();
		this.authService.publishUserDataChange();
	}	
}
