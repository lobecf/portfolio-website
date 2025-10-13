import { Component } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public darkModeService: DarkModeService, private router: Router) {}

  navigateHome() {
    this.router.navigate([`/`])
  }

}
