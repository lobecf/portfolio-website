import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProject1ContentComponent } from './project-project1-content.component';

describe('ProjectProject1ContentComponent', () => {
  let component: ProjectProject1ContentComponent;
  let fixture: ComponentFixture<ProjectProject1ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectProject1ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectProject1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
