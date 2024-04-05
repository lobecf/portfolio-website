import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExperienceContentComponent } from './about-experience-content.component';

describe('AboutExperienceContentComponent', () => {
  let component: AboutExperienceContentComponent;
  let fixture: ComponentFixture<AboutExperienceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutExperienceContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutExperienceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
