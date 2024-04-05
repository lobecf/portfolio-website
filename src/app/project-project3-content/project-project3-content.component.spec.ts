import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProject3ContentComponent } from './project-project3-content.component';

describe('ProjectProject3ContentComponent', () => {
  let component: ProjectProject3ContentComponent;
  let fixture: ComponentFixture<ProjectProject3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectProject3ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectProject3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
