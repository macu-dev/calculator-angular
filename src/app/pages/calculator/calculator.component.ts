import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonCal } from 'src/app/calculator/models/ButtonCal.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styles: [
  ]
})
export class CalculatorComponent implements OnInit {
   btn: string | number = '';
   digits = '';
   buttons:ButtonCal[] = [
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 'DEL'},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: '+'},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: '-'},
    {value: '.'},
    {value: 0},
    {value: '/'},
    {value: 'x'},
    {value: 'RESET'},
    {value: '='}
  ];


  constructor() { }


  verificationValue(value: string | number){
    switch (value) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        this.digits += value;
        console.log('hola', this.digits);
        break;
      default:
        break;
    }

  }
  getNumber(btn: string | number){
    this.btn = btn;
    this.verificationValue(this.btn);
  }


  ngOnInit(): void {
  }

}
