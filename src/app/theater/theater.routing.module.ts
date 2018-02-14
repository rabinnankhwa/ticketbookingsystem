import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TheaterListComponent } from './theater-list/theater-list.component';


const routes: Routes = [
    { path: 'theaters', component: TheaterListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TheaterRoutingModule {}
