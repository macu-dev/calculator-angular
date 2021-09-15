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


  getNumber(btn: string | number){
    this.btn = btn;
  }
  ngOnInit(): void {
  }

}
