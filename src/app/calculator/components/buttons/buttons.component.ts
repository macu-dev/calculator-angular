import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ButtonCal } from '../../models/ButtonCal.interface';





@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {
  @Input() button!: ButtonCal;
  @Output () buttonTarget: EventEmitter<string | number> = new EventEmitter();


  constructor() { }

  isNumber( item: string | number): string {
    if(typeof (item) === 'number') {
      return 'button-number';
    }else{
      return 'button-string';
    }
  }

  getNumber(){
    this.buttonTarget.emit(this.button.value);
  }

  ngOnInit(): void {

  }

}
