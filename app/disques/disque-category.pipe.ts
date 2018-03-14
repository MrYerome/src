import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disqueCategory'
})
export class DisqueCategoryPipe implements PipeTransform {

  transform(cat:string): string {
    let color: string;
    switch(cat){
      
      case 'Francais':
      color = 'blue ligthen-1';
      break;
      
      case 'Disco':
      color = 'green ligthen-1';
      break;
      
      case 'Etranger':
      color = 'brown ligthen-1';
      break;
     
      case 'Funk':
      color = 'blue ligthen-3';
      break;
     
      case 'Soul':
      color = 'deep=purple accent-1';
      break;
      
      case 'Autre':
      color = 'pink ligthen-4';
      break;
     
      case 'Jazz':
      color = 'deep-purple draken-2';
      break;
      
      case 'Variete':
      color = 'lime accent-1';
      break;
      
      default:
      color = 'grey';
      break
      
    }
    return 'chip ' + color;
  }

}
