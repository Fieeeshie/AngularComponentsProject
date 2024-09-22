import { Component } from '@angular/core';

@Component({
  selector: 'app-lowercasegreeting',
  templateUrl: './lowercasegreeting.component.html',
  styleUrl: './lowercasegreeting.component.css'
})
export class LowercasegreetingComponent {
  name: string = '';
  lowercaseGreeting: string = '';

  greetLowercase() {
    this.lowercaseGreeting = `Hello, ${this.name.toLowerCase()}`;
  }
}
