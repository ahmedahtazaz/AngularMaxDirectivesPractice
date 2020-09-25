import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('defaultBgColor') defaultBgColor: string = 'transparent';
  @Input('defaultTextColor') defaultTextColor: string = 'black';
  @Input('highlightBgColor') highlightBgColor: string = 'green';
  @Input('highlightTextColor') highlightTextColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor() { }
  
  ngOnInit(): void {
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultTextColor;
  }

  @HostListener('mouseenter') mouseHover = (event: Event) => {
    this.backgroundColor = this.highlightBgColor;
    this.color = this.highlightTextColor;
  }

  @HostListener('mouseleave') mouseLeave = (event: Event) => {
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultTextColor;
  }

}
