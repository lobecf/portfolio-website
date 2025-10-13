import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from '../shared.service';
import { DarkModeService } from '../dark-mode.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private routerEventsSubscription: Subscription | undefined;

  constructor(
    public sharedService: SharedService, 
    public darkModeService: DarkModeService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Set the initial value of selectedComponent based on the current route
    this.sharedService.selectedComponent = this.router.url.slice(1) || 'defaultRoute'; // Provide a default if needed

    // Subscribe to router events to update selectedComponent on navigation
    this.routerEventsSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.sharedService.selectedComponent = event.url.slice(1);
    });
  }

  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  showContent(menuItem: string) {
    this.sharedService.selectedComponent = menuItem;
    this.router.navigate([menuItem]);
  }
}
