import { Component } from '@angular/core';

@Component({
  selector: 'app-areacalculator',
  templateUrl: './areacalculator.component.html',
  styleUrl: './areacalculator.component.css'
})
export class AreacalculatorComponent {
  length: number = 0;
  width: number = 0;
  area: number = 0;

  calculateArea() {
    this.area = this.length * this.width;
  }
}
