import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') mouseHover = (event: Event) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave') mouseLeave = (event: Event) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

}
