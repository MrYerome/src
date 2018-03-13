import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListDisquesComponent } from './../list-disques/list-disques.component';
import { DetailsDisqueComponent } from './../details-disque/details-disque.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes : Routes =[
{path : 'disques', component : ListDisquesComponent},
{path : 'disque/:id', component : DetailsDisqueComponent},
{path : '', redirectTo : 'disques', pathMatch:'full' },
{path : '**', component : PageNotFoundComponent }
];

@NgModule({
imports : [
RouterModule.forRoot(appRoutes)
],
exports: [
RouterModule
]
})
export class AppRoutingModule{}
