import { Component } from '@angular/core';

@Component({
  selector: 'app-percentagecalculator',
  templateUrl: './percentagecalculator.component.html',
  styleUrl: './percentagecalculator.component.css'
})
export class PercentagecalculatorComponent {
  firstNumber: number = 0;
  secondNumber: number = 0;
  percentageResult: number = 0;

  calculatePercentage() {
    if (this.secondNumber !== 0) {
      this.percentageResult = (this.firstNumber / this.secondNumber) * 100;
    }
  }
}
