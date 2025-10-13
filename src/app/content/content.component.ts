import { Component } from "@angular/core";
import { Router } from '@angular/router'; // Import Router
import { DarkModeService } from "../dark-mode.service";
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  private contentOrder = [
    'intro',
    'skillsets',
    'experience',
    'education',
    'project1',
    'project2',
    'project3',
    'resume',
    'contact'
  ];

  constructor(
    public sharedService: SharedService, 
    public darkModeService: DarkModeService,
    private router: Router // Inject Router
  ) {}

  navigateTo(direction: 'next' | 'prev') {
    const currentIndex = this.contentOrder.indexOf(this.sharedService.selectedComponent);
    
    if (direction === 'next' && currentIndex < this.contentOrder.length - 1) {
      this.sharedService.selectedComponent = this.contentOrder[currentIndex + 1];
      this.router.navigate([this.sharedService.selectedComponent]); // Navigate to the next route
    } else if (direction === 'prev' && currentIndex > 0) {
      this.sharedService.selectedComponent = this.contentOrder[currentIndex - 1];
      this.router.navigate([this.sharedService.selectedComponent]); // Navigate to the previous route
    }
  }

  isFirstComponent() {
    return this.sharedService.selectedComponent === this.contentOrder[0];
  }

  isLastComponent() {
    return this.sharedService.selectedComponent === this.contentOrder[this.contentOrder.length - 1];
  }
}
