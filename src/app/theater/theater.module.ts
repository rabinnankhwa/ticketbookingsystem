import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../shared/material.module';
import { FormsModule } from '@angular/forms';

import { TheaterRoutingModule } from './theater.routing.module';

import { TheaterListComponent } from './theater-list/theater-list.component';
import { TheaterDialogComponent } from './theater-dialog/theater-dialog.component';
import { AuditoriumDialogComponent } from './auditorium-dialog/auditorium-dialog.component';

import { TheaterService } from './services/theater.service';
import { AutitoriumService } from './services/autitorium.service';


@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		TheaterRoutingModule
	],
	entryComponents:[
		TheaterDialogComponent,
		AuditoriumDialogComponent
	],
	declarations: [
		TheaterListComponent,
		TheaterDialogComponent,
		AuditoriumDialogComponent
	],
	providers: [
		TheaterService,
		AutitoriumService
	]
})
export class TheaterModule { }
