import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { MovieComponent } from './movie/movie.component';
import { MovieService } from './service/movie.service';
import { FormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie.routing.module';
import { MaterialModule } from './../shared/material.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		MovieRoutingModule,
		HttpModule
	],
	declarations: [
		MovieComponent
	],
	exports: [
		MovieComponent
	],
	providers: [
		MovieService
	]
})
export class MovieModule { }
