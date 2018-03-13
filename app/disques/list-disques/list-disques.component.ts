import { Component, OnInit } from '@angular/core';
import { Disque } from './../Disque';
import { DISQUES } from './../disques-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-disques',
  templateUrl: './list-disques.component.html',
  styleUrls: ['./list-disques.component.css']
})
export class ListDisquesComponent implements OnInit {
  title = 'Liste des disques';
  private disques: Disque[] = null;

  constructor(private router: Router){}

  ngOnInit(): void {

    this.disques = DISQUES;
  }

  selectDisque(d) {
    console.log(d.title);
    this.router.navigate(['/disque',d.id]);
  }

}
