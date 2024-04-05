import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
  })
  export class ContentComponent {
  constructor(public sharedService: SharedService, public darkModeService: DarkModeService) {}

  darkMode() {
    this.darkModeService.toggleDarkMode(); // Call the toggleDarkMode method in the SharedService
    const contentWrapper = document.querySelector('.content-wrapper');
    
    if (contentWrapper) { 
      contentWrapper.classList.toggle('dark-mode');
    }
  
  }
}
