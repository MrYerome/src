import { Component, OnInit } from '@angular/core';
import { Disque } from './../Disque';
import { Router } from '@angular/router';
import { DisquesService } from '../disques.service';

@Component({
  selector: 'app-list-disques',
  templateUrl: './list-disques.component.html',
  styleUrls: ['./list-disques.component.css']
})
export class ListDisquesComponent implements OnInit {
  title = 'Liste des disques';
  private disques: Disque[] = null;

  constructor(private router: Router, private disquesService:DisquesService ){}

  ngOnInit(): void {
    this.getDisques();
    //this.disques = DISQUES;
  }

  getDisques(): void {
    this.disques = this.disquesService.getAllDisques();
  }

  selectDisque(d) {
    console.log(d.title);
    this.router.navigate(['/disque',d.id]);
  }

}
