import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListDisquesComponent } from './list-disques/list-disques.component';
import { DetailsDisqueComponent } from './details-disque/details-disque.component';
import { BordureDirective } from './bordure.directive';
import { MajTitrePipe } from './maj-titre.pipe';
import { DisqueCategoryPipe } from './disque-category.pipe';
import { DisquesRoutingModule } from './disques-routing/disques-routing.module';
import { DisquesService } from './disques.service';
import { EditDisqueComponent } from './edit-disque/edit-disque.component';
import { DisqueFormComponent } from './disque-form/disque-form.component';
import { SearchDisqueComponent } from './search-disque/search-disque.component';
import { LoaderComponent } from '../loader/loader.component';
import { AuthGuard } from '../auth.guard';

@NgModule({
  imports: [
    CommonModule,
    DisquesRoutingModule,
    FormsModule
  
  ],
  declarations: [
    ListDisquesComponent,
    DetailsDisqueComponent,
    BordureDirective,
    MajTitrePipe,
    DisqueCategoryPipe,
    EditDisqueComponent,
    DisqueFormComponent,
    SearchDisqueComponent,
    LoaderComponent
  ], providers :[
    DisquesService,
    AuthGuard
  ]
})
export class DisquesModule { }
