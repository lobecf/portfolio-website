import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIntroContentComponent } from './about-intro-content.component';

describe('AboutIntroContentComponent', () => {
  let component: AboutIntroContentComponent;
  let fixture: ComponentFixture<AboutIntroContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutIntroContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIntroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
