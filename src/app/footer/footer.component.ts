import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  get modeIcon() {
    return this.darkModeService.darkModeEnabled ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
  }

}
