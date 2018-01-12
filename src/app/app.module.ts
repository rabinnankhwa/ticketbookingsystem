import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MovieModule } from './movie/movie.module';
import { AppRoutingModule } from './app.route.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		MovieModule,
		AppRoutingModule,
		BrowserModule,		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
