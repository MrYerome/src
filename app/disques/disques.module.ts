import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsDisqueComponent } from './details-disque/details-disque.component';
import { UppercaPipe } from './upperca.pipe';
import { BordureDirective } from './bordure.directive';
import { DisqueCategoryPipe } from './disque-category.pipe';
import { ListDisquesComponent } from './list-disques/list-disques.component';
import { DisquesRoutingModule } from './disques-routing/disques-routing.module';
import { DisquesService } from './disques.service';
import { EditDisqueComponent } from './edit-disque/edit-disque.component';
import { DisqueFormComponent } from './disque-form/disque-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DisquesRoutingModule
  ],
  declarations: [
    DetailsDisqueComponent,
    ListDisquesComponent,
    UppercaPipe,
    BordureDirective,
    DisqueCategoryPipe,
    EditDisqueComponent,
    DisqueFormComponent
  ],
  providers: [
  DisquesService]
})
export class DisquesModule { }
