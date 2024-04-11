import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './Counter/counter.component';
import { ButtonAddComponent } from './Counter/button-add/button-add.component';
import { ButtonDisComponent } from './Counter/button-dis/button-dis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ButtonAddComponent, ButtonDisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
