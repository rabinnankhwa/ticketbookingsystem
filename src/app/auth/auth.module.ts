import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRouteModule } from './auth.route.module';
import { MaterialModule } from './../shared/material.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		AuthRouteModule,
		FormsModule,
		MaterialModule,
		FlexLayoutModule
	],
	declarations: [
		LoginComponent,
		RegisterComponent,
		UserDialogComponent,
		UserListComponent
	],
	entryComponents: [
		UserDialogComponent
	],
	providers: [
	]
})
export class AuthModule { }
