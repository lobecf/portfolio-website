import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEducationContentComponent } from './about-education-content.component';

describe('AboutEducationContentComponent', () => {
  let component: AboutEducationContentComponent;
  let fixture: ComponentFixture<AboutEducationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutEducationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutEducationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
