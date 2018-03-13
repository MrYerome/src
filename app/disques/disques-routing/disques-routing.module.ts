import { NgModule } from '@angular/core';
import { ListDisquesComponent } from '../list-disques/list-disques.component';
import { DetailsDisqueComponent } from '../details-disque/details-disque.component';
import { RouterModule, Routes } from '@angular/router';
import { EditDisqueComponent } from '../edit-disque/edit-disque.component';


const disquesRoutes = [
  {
    path: 'disque', children: [
      { path: 'all', component: ListDisquesComponent },
      { path: ':id', component: DetailsDisqueComponent },
      { path: 'edit/:id', component: EditDisqueComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(disquesRoutes)
  ],
  exports: []
})
export class DisquesRoutingModule { }
