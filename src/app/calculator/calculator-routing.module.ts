import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from '../pages/calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'calculator', component: CalculatorComponent },
      { path: '**', redirectTo: 'calculator'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
