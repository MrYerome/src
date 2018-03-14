import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisquesService } from '../disques.service';
import { Disque } from '../disque';

@Component({
  selector: 'app-edit-disque',
  templateUrl: './edit-disque.component.html',
  styleUrls: ['./edit-disque.component.css']
})
export class EditDisqueComponent implements OnInit {

  disque : Disque=null;

  constructor(private route : ActivatedRoute, private router:Router, private disquesService: DisquesService ) { }

  ngOnInit() : void {
    this.recupDisque();
  }

  recupDisque(){
    let id=+this.route.snapshot.paramMap.get('id');
      // this.disque=this.disquesService.getDisque(id);
      this.disquesService.getDisque(id).subscribe(data => this.disque=data);
    }



    goBack():void{
      this.router.navigate(['/disque/all']);
    }

}
