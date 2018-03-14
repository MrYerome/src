import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// ce fichier appel les composants

// definir nos routes
const appRoutes:Routes =[
  
  {path : '', redirectTo :  'disque/all' , pathMatch : 'full'},
  {path : '**' , component : PageNotFoundComponent}
  // path -> intercepter le chemin et rediriger
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // forRoute -> injecter principal
    
  ],
  exports: [
    RouterModule
    // injecter dans le module
  ]
})
export class AppRoutingModule { }
