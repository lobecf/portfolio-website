import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { AboutIntroContentComponent } from './about-intro-content/about-intro-content.component';
import { AboutExperienceContentComponent } from './about-experience-content/about-experience-content.component';
import { AboutSkillsetsContentComponent } from './about-skillsets-content/about-skillsets-content.component';
import { AboutEducationContentComponent } from './about-education-content/about-education-content.component';
import { ProjectProject1ContentComponent } from './project-project1-content/project-project1-content.component';
import { ProjectProject2ContentComponent } from './project-project2-content/project-project2-content.component';
import { ProjectProject3ContentComponent } from './project-project3-content/project-project3-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NavBarComponent,
    AboutContentComponent,
    ProjectsContentComponent,
    ResumeContentComponent,
    ContactContentComponent,
    AboutIntroContentComponent,
    AboutExperienceContentComponent,
    AboutSkillsetsContentComponent,
    AboutEducationContentComponent,
    ProjectProject1ContentComponent,
    ProjectProject2ContentComponent,
    ProjectProject3ContentComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
PdfViewerModule,
NgxExtendedPdfViewerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
