import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  titles: string[] = ['Full Stack Engineer', 'UX/UI Designer', 'Agilist'];
  currentTitle: string = this.titles[0];
  titleIndex: number = 0;

  constructor(public darkModeService: DarkModeService, private router: Router) {}

  ngOnInit() {
    this.rotateTitles();
  }

  enter() {
    this.router.navigate(['/content']);
  }

  rotateTitles() {
    setInterval(() => {
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.currentTitle = this.titles[this.titleIndex];
    }, 3000); // Rotate every 3 seconds
  }
}
