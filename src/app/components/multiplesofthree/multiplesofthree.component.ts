import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplesofthree',
  templateUrl: './multiplesofthree.component.html',
  styleUrl: './multiplesofthree.component.css'
})
export class MultiplesofthreeComponent {
  maxNumber: number = 0;
  multiplesOfThree: number[] = [];

  displayMultiplesOfThree() {
    this.multiplesOfThree = [];
    for (let i = 1; i <= this.maxNumber; i++) {
      if (i % 3 === 0) {
        this.multiplesOfThree.push(i);
      }
    }
  }
}
