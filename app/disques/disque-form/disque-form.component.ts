import { Component, OnInit, Input } from '@angular/core';
import { Disque } from '../disque';
import { DisquesService } from '../disques.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disque-form',
  templateUrl: './disque-form.component.html',
  styleUrls: ['./disque-form.component.css']
})
export class DisqueFormComponent implements OnInit {
  @Input() disque : Disque
  categories:Array<string>

  constructor(private disqueService:DisquesService, private router :Router) { }

  ngOnInit() {
    this.categories=this.disqueService.getDisqueCategories();
  }

  hasCategory(c: string): boolean{
    let indexCat= this.disque.cat.indexOf(c);
    
    if (indexCat>-1){
      return true;

    }else return false
    

  }

  selectCat(evt:any, c: string){
    // console.log(c);
    let coche = evt.target.checked;
    // console.log(coche);
    if (coche ==true){
      // console.log('fhfhf')
      this.disque.cat.push(c);
      // ajouter categorie 
    }else{
      let indexCat= this.disque.cat.indexOf(c);
      if(~indexCat) {
        // ~index = super a -1 donc 0 et plus
        this.disque.cat.splice(indexCat, 1);
        // 
      }
      


    }
    // console.log(this.disque.cat);

  }
  isCatValid(c:string) :boolean{
    // entree / sortie
    let nbreCat = this.disque.cat.length;
    if (nbreCat >= 4 && !this.hasCategory(c) || nbreCat===1 && this.hasCategory(c)){
      return true;

    }else {

    }
   
  }

  onSubmit(){
    console.log('form envoye');
    this.disqueService
      .updateDisque(this.disque)
      .subscribe(()=>this.goBack());
  }

  goBack():void{
    this.router.navigate(['/disque', this.disque.id]);
  }

}
