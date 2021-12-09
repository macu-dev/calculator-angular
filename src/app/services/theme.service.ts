import { Injectable } from '@angular/core';
import { Theme, light, dark, purple } from "../calculator/models/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = dark;
  private availableThemes: Theme[] = [dark, light, purple];


  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setPurpleTheme(): void {
    this.setActiveTheme(purple);
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  changeThemes(config: number): void{
    switch (config) {
      case 0:
        this.setDarkTheme();
        break;

      case 1:
        this.setLightTheme();
        break;

      case 2:
        this.setPurpleTheme();
        break;

      default:
        break;
    }
  }

}
