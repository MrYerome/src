import { Component, OnInit } from '@angular/core';
import { DISQUES } from './../disques-data';
import { Disque } from './../disque';
import { Router } from '@angular/router';
import { DisquesService } from '../disques.service';


@Component({
  selector: 'app-list-disques',
  templateUrl: './list-disques.component.html',
  styleUrls: ['./list-disques.component.css']
})
export class ListDisquesComponent implements OnInit {
  public disques:Disque[] =null;

  constructor(private router: Router, private disquesService: DisquesService) { }

  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.disques=DISQUES;
  }
  getDisques(){
    // this.disques=this.disquesService.getAllDisques()
    this.disquesService.getAllDisques().subscribe(data => this.disques = data);

  }

  selectDisque(d){
    console.log(d.title);
    this.router.navigate(['/disque',d.id]);
  }

  affichDisque(d) {
    console.log(d.title);

  }

}
