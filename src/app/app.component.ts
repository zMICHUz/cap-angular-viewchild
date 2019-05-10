import { OnInit, Component, ViewChild, ElementRef } from '@angular/core';

import { TestComponent } from './test/test.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  @ViewChild('input') input: ElementRef
  @ViewChild(TestComponent) appTest: TestComponent

  name = 'Angular';

  ngOnInit() {    
    setTimeout(() => {
      this.appTest.inyectThings();
      this.input.nativeElement.value = `Inyected with renderer`;
    }, 2000);
  }
}
