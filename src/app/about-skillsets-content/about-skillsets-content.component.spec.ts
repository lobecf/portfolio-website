import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSkillsetsContentComponent } from './about-skillsets-content.component';

describe('AboutSkillsetsContentComponent', () => {
  let component: AboutSkillsetsContentComponent;
  let fixture: ComponentFixture<AboutSkillsetsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSkillsetsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSkillsetsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
