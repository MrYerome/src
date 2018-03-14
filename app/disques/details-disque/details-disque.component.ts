import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Disque } from '../disque';
import { DISQUES } from '../disques-data';
import { DisquesService } from '../disques.service';


@Component({
  selector: 'app-details-disque',
  templateUrl: './details-disque.component.html',
  styleUrls: ['./details-disque.component.css']
})
export class DetailsDisqueComponent implements OnInit {
  // disques: Disque[]=null;
  disque :Disque = null;

  constructor (private route: ActivatedRoute, private router:Router, private disquesService: DisquesService) { }
  // injecter des dependances de services

  
  ngOnInit() :void{
    this.recupDisque();
    
  //   this.disques = DISQUES;
  //   let id = +this.route.snapshot.paramMap.get('id');
  //   for(let i=0 ; i<this.disques.length ; i++){
  //     if (this.disques[i].id == id){
  //       this.disque = this.disques[i];
  //     }
  //   }
  }
  recupDisque(){
  let id=+this.route.snapshot.paramMap.get('id');
    // this.disque=this.disquesService.getDisque(id);
    this.disquesService.getDisque(id).subscribe(data => this.disque=data);
  }
  editDisque(d){
    this.router.navigate(['/disque/edit',d.id]);

  }
  deleteDisque(d) {
    if (confirm('supprimer ce disque ?')) {
      this.disquesService.deleteDisque(d).subscribe(() => this.goBack());
    }
    
    //
  }


  goBack():void{
    this.router.navigate(['/disque/all']);
  }

}
