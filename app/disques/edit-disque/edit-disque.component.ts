import { Component, OnInit } from '@angular/core';
import { Disque } from './../Disque';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DisquesService } from '../disques.service';

@Component({
  selector: 'app-edit-disque',
  templateUrl: './edit-disque.component.html',
  styleUrls: ['./edit-disque.component.css']
})

export class EditDisqueComponent implements OnInit {

  disque: Disque = null;
  constructor(private route: ActivatedRoute, private router: Router, private disquesService: DisquesService) { }

  ngOnInit(): void {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.disque = this.disquesService.getDisque(id);
    

  }

}
