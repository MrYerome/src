import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
//import { DISQUES } from './../disques-data';
import { DisquesService } from '../disques.service';
import { Disque } from './../Disque';

@Component({
  selector: 'app-details-disque',
  templateUrl: './details-disque.component.html',
  styleUrls: ['./details-disque.component.css']
})
export class DetailsDisqueComponent implements OnInit {
  disques: Disque[] = null;
  disque: Disque = null;

  constructor(private route:ActivatedRoute, private router : Router, private disquesService : DisquesService) { }

  ngOnInit(): void {
    /*this.disques = DISQUES;
    let id = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.disques.length; i++) {
      if (this.disques[i].id == id) {
        this.disque = this.disques[i];
      } 
    }*/
    this.recupDisque();
  }

  recupDisque() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.disque = this.disquesService.getDisque(id);
  }

  editDisque(d) {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/disque/edit', d.id]);
    console.log(id);
  }

goBack(): void {
  this.router.navigate(['/disques']);
  }


}
