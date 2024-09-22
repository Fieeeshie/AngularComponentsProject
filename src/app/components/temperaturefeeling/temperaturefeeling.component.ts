import { Component } from '@angular/core';

@Component({
  selector: 'app-temperaturefeeling',
  templateUrl: './temperaturefeeling.component.html',
  styleUrl: './temperaturefeeling.component.css'
})
export class TemperaturefeelingComponent {
  temperature: number = 0;
  temperatureFeeling: string = '';

  checkTemperatureFeeling() {
    if (this.temperature >= 30) {
      this.temperatureFeeling = 'Hot';
    } else if (this.temperature <= 15) {
      this.temperatureFeeling = 'Cold';
    } else {
      this.temperatureFeeling = 'Warm';
    }
  }
}
