import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'majTitre'
})
export class MajTitrePipe implements PipeTransform {

  transform(value: string): string {
    return value
    .toLowerCase()
    .split(" ")
    .map((val) => val.charAt(0).toUpperCase()+val.substring(1))
    .join(" ");
  }

  // (val) =>.....
  // egal a 
  // function (val){
    // return val.charAt.......       c'est plus court et ca return direct
  

}
