import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  constructor() { }

  @Input() question!: string;
  @Input() minValue!: string;
  @Input() maxValue!: string;
  // https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/
  // optional parameter
  @Input() units?: string;

  @Output() result: EventEmitter<any> = new EventEmitter();
  // to get myAns to show, you need to give values to the sliders
  @Output() myAns: EventEmitter<number> = new EventEmitter<number>();

  public sliderChanged(event: any) {
    console.log(this.result);
    this.myAns = event.value;
    this.result.emit(event.value);
  }

  ngOnInit(): void {
  }

}
