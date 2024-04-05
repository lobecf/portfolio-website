import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProject2ContentComponent } from './project-project2-content.component';

describe('ProjectProject2ContentComponent', () => {
  let component: ProjectProject2ContentComponent;
  let fixture: ComponentFixture<ProjectProject2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectProject2ContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectProject2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
