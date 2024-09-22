import { Component } from '@angular/core';

@Component({
  selector: 'app-greetinselectedlanguage',
  templateUrl: './greetinselectedlanguage.component.html',
  styleUrl: './greetinselectedlanguage.component.css'
})
export class GreetinselectedlanguageComponent {
  selectedLanguage: string = 'English';
  greeting: string = '';

  greetInSelectedLanguage() {
    if (this.selectedLanguage === 'English') {
      this.greeting = 'Hello';
    } else if (this.selectedLanguage === 'Spanish') {
      this.greeting = 'Hola';
    } else if (this.selectedLanguage === 'French') {
      this.greeting = 'Bonjour';
    }
  }
}
