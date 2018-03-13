import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Disque } from '../disque';

@Component({
  selector: 'app-disque-form',
  templateUrl: './disque-form.component.html',
  styleUrls: ['./disque-form.component.css']
})
export class DisqueFormComponent implements OnInit {

  @Input() disque: Disque;
  constructor() { }

  ngOnInit() {
  }

}
