import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeEnabled = false;
  
  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    document.body.classList.toggle('dark-mode', this.darkModeEnabled);
    }

}
