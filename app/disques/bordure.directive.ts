import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordure]'
})
export class BordureDirective {
  private initialColor:string='#f5f5f5';
  private hoverColor:string='#4A148C'; 

  constructor( private el:ElementRef) { 
    
    this.setHeight(200);
  }

  @Input('appBordure') borderColor:string;

  @HostListener('mouseenter')onmouseenter(){
    this.setBorder(this.borderColor || this.hoverColor);

  }
  @HostListener('mouseleave')onmouseleave(){
    this.setBorder(this.initialColor);

  }

  private setBorder(color:string) {
    let border = '4px solid '+ color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height:number) {
    this.el.nativeElement.style.height=height+"px";
    
  }

}
