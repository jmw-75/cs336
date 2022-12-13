import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cs336-hmwk8';
  target: number;
  inputNum: number;
  accuracy: number;
  feedback: string[] = [];
  count: number = 0;
  correct: boolean;

  submit() {
    // Count the number of tries ... reset when correct later 
    this.count++;
    //provided by Prof Norman
    const answer = Math.sqrt(this.target);
    const inputNum = Number(this.inputNum);
    if (Math.abs(inputNum - answer) / answer <= this.accuracy / 100) { //correct answer
      this.feedback.push(this.inputNum + " is close enough! Correct answer is " + answer);
      this.feedback.push("You got the answer in " + this.count + " tries!");
      this.correct = true;
    } else if (inputNum < answer) {
      this.feedback.push(this.inputNum + " is too low.  Try again.");
    } else {
      this.feedback.push(this.inputNum + " is too high. Try again.");
    }
    console.log(this.inputNum);
  }

  //Src: https://www.autoscripts.net/angular-random-number-between-1-and-10/
  // random number int val from 50 - 250
  randomNum() {
    this.target = Math.floor(Math.random() * (250 - 50 + 1)) + 50;
  }

  //resets everything so the uswer can play again
  newGame() {
    this.inputNum = null;
    this.feedback = [];
    this.count = 0;
    this.correct = false;
  }
}
