import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') mouseHover = (event: Event) => {
    this.backgroundColor = 'green';
    this.color = 'yellow';
  }

  @HostListener('mouseleave') mouseLeave = (event: Event) => {
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }

}
