import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DarkModeService } from '../dark-mode.service';

@Component({
selector: 'app-nav-bar',
templateUrl: './nav-bar.component.html',
styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
constructor(public sharedService: SharedService, public darkModeService: DarkModeService) {}

showContent(menuItem: string) {
this.sharedService.selectedComponent = menuItem;
}

}
