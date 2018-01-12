import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './service/movie.service';

import { MovieRoutingModule } from './movie.routing.module';

@NgModule({
	imports: [
		CommonModule,
		MovieRoutingModule
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
