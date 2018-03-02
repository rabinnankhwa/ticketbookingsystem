import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowsListComponent } from './shows-list/shows-list.component';

const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'shows-lsit/:id', component: ShowsListComponent },    
    { path: '', component: HomeComponent },    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }