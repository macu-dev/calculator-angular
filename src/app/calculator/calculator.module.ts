import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ScreenComponent } from './components/screen/screen.component';
import { FiltersThemeComponent } from './components/filters-theme/filters-theme.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    ScreenComponent,
    FiltersThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
