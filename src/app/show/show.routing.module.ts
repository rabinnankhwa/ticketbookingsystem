import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShowListComponent } from './show-list/show-list.component';


const routes: Routes = [
    { path: 'shows', component: ShowListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowRoutingModule { }
