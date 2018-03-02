import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../shared/material.module';
import { FormsModule } from '@angular/forms';


import { ShowListComponent } from './show-list/show-list.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { SeatDialogComponent } from './seat-dialog/seat-dialog.component';

import { ShowRoutingModule } from './show.routing.module';
import { ShowService } from './services/show.service';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		ShowRoutingModule
	],
	entryComponents: [
		ShowDialogComponent, 
		SeatDialogComponent
	],
	declarations: [
		ShowListComponent, 
		ShowDialogComponent, 
		SeatDialogComponent
	],
	providers: [
		ShowService,
	]
})
export class ShowModule { }
