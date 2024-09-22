import { Component } from '@angular/core';

@Component({
  selector: 'app-usernameuppercase',
  templateUrl: './usernameuppercase.component.html',
  styleUrl: './usernameuppercase.component.css'
})
export class UsernameuppercaseComponent {
  username: string = '';
  uppercaseUsername: string = '';

  convertToUppercase() {
    this.uppercaseUsername = this.username.toUpperCase();
  }
}
