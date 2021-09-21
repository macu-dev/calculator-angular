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
  digits = '';


  constructor() { }

  isNumber( item: string | number): string {
    if(typeof (item) === 'number') {
      return 'button-number';
    }else{
      return 'button-string';
    }
  }

  calculate(){

  }



  getNumber(event: Event){
    let number = (event.target as HTMLButtonElement).dataset.value || '';
    this.buttonTarget.emit(number);
  }

  // getvalue(event: Event){
  //   console.log((event.target as HTMLButtonElement).dataset);
  //   console.log(event.target);
  // }

  ngOnInit(): void {

  }



}
