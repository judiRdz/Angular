import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  standalone: true,
  imports: [],
  templateUrl: './button-dis.component.html',
  styleUrl: './button-dis.component.css'
})
export class ButtonDisComponent {
  @Input()
  contador:number=0;

  @Output() onDis:EventEmitter<number> = new EventEmitter()
  diss(){
    this.contador--;
    this.onDis.emit(this.contador)
  }
}
