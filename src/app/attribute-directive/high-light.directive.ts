import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  constructor(private ele: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void{
    this.ele.nativeElement.style.backgroundColor = "purple";
    this.ele.nativeElement.style.color = "white";
    this.renderer2.setStyle(this.ele.nativeElement, "background-color","yellow");
  }

  @HostBinding("style.backgroundColor")bgColor: string = "red";
}
