import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ScreenComponent } from './components/screen/screen.component';
import { FiltersThemeComponent } from './components/filters-theme/filters-theme.component';
import { CalculatorComponent } from '../pages/calculator/calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [
    ButtonsComponent,
    ScreenComponent,
    FiltersThemeComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule

  ]
})
export class CalculatorModule { }
