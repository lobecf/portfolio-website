import { Component } from "@angular/core";
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

  constructor(public sharedService: SharedService, public darkModeService: DarkModeService) {}

  navigateTo(direction: 'next' | 'prev') {
    const currentIndex = this.contentOrder.indexOf(this.sharedService.selectedComponent);
    if (direction === 'next') {
      const nextIndex = Math.min(currentIndex + 1, this.contentOrder.length - 1);
      this.sharedService.selectedComponent = this.contentOrder[nextIndex];
    } else if (direction === 'prev') {
      const prevIndex = Math.max(currentIndex - 1, 0);
      this.sharedService.selectedComponent = this.contentOrder[prevIndex];
    }
  }

  isFirstComponent() {
    return this.sharedService.selectedComponent === this.contentOrder[0];
  }

  isLastComponent() {
    return this.sharedService.selectedComponent === this.contentOrder[this.contentOrder.length - 1];
  }
}
