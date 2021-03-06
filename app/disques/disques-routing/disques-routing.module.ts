import { NgModule } from '@angular/core';
import { ListDisquesComponent } from '../list-disques/list-disques.component';
import { DetailsDisqueComponent } from '../details-disque/details-disque.component';
import { RouterModule, Routes } from '@angular/router';
import { EditDisqueComponent } from '../edit-disque/edit-disque.component';
import { AuthGuard } from '../../auth.guard';


const disquesRoutes=[
  {path : 'disque', children :[
    {
      path: 'all',
      canActivate: [AuthGuard],
      component: ListDisquesComponent
    },
    {
      path: 'edit/:id', component: EditDisqueComponent},
    {path : ':id', component : DetailsDisqueComponent}
  ]}
];
@NgModule({
  imports: [
    RouterModule.forChild(disquesRoutes)

  ],
  exports: [ RouterModule ]
  // export -> renvoyer
})
export class DisquesRoutingModule { }
