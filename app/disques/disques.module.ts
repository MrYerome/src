import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsDisqueComponent } from './details-disque/details-disque.component';
import { UppercaPipe } from './upperca.pipe';
import { BordureDirective } from './bordure.directive';
import { DisqueCategoryPipe } from './disque-category.pipe';
import { ListDisquesComponent } from './list-disques/list-disques.component';
import { DisquesRoutingModule } from './disques-routing/disques-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DisquesRoutingModule
  ],
  declarations: [
    DetailsDisqueComponent,
    ListDisquesComponent,
    UppercaPipe,
    BordureDirective,
    DisqueCategoryPipe
  ]
})
export class DisquesModule { }
