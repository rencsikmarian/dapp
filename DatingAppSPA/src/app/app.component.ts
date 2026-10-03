import { Component } from '@angular/core';
import { ValueComponent } from './value/value.component';

@Component({
  selector: 'app-root',
  imports: [ValueComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'DatingAppSPA';
}
