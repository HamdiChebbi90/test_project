import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  Roles = ['Admin', 'User', 'Guest'];

}
