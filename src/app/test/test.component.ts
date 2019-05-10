import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @ViewChild('p') p: ElementRef;

  constructor(private renderer: Renderer2) { }

  inyectThings() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Inyected with renderer -> Hello Cap!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.p.nativeElement, div);

    setTimeout(() => {
      const text = this.renderer.createText('Now put some color with renderer!');
      this.renderer.appendChild(this.p.nativeElement, text);

      this.renderer.setStyle(this.p.nativeElement, 'background', '#f0ad4e')
    }, 2000);
  }

}