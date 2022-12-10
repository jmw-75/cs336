import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public gotResult(event: any) {
    console.log(event);
  }

  // https://stackblitz.com/edit/angular-display-mat-slider-value?file=app%2Fslider-overview-example.ts,app%2Fslider-overview-example.html
  // work from here... 

}
