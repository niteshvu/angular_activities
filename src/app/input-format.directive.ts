import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { //this enables the program to listen to the events in the dom  
                                        // mind this is a private el

  }
  @Input('appInputFormat') format;
  @HostListener('blur') onfocus(){
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowerCase'){
      this.el.nativeElement.value = value.toLowerCase();
    }
    else
    this.el.nativeElement.value = value.toUpperCase(); //this makes the text to uppercase on blur
  }

}



