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

  public sliderChanged(event: any) {
    console.log(this.result);
    this.result.emit(event.value);
  }

  ngOnInit(): void {
  }

}
