import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  time: number = 0;
  frequency: number = 1;
  compoundInterest: number | null = null;

  calculateCompoundInterest(): void {
    this.compoundInterest = this.principal * (Math.pow((1 + (this.rate / (this.frequency * 100))), this.frequency * this.time));
  }
}
