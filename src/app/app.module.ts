import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { TheaterModule } from './theater/theater.module';

import { AppRoutingModule } from './app.route.module';
import { MaterialModule } from './shared/material.module';

import { BaseService } from './shared/base.service';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/guard.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		MaterialModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MovieModule,
		TheaterModule,
		AuthModule,
		AppRoutingModule
	],
	providers: [
		BaseService,
		AuthGuard,
		AuthService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
