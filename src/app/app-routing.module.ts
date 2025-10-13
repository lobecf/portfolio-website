import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutIntroContentComponent } from './about-intro-content/about-intro-content.component';
import { AboutSkillsetsContentComponent } from './about-skillsets-content/about-skillsets-content.component';
import { AboutExperienceContentComponent } from './about-experience-content/about-experience-content.component';
import { AboutEducationContentComponent } from './about-education-content/about-education-content.component';
import { ProjectProject1ContentComponent } from './project-project1-content/project-project1-content.component';
import { ProjectProject2ContentComponent } from './project-project2-content/project-project2-content.component';
import { ProjectProject3ContentComponent } from './project-project3-content/project-project3-content.component';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '', component: ContentWrapperComponent, children: [
    { path: 'intro', component: AboutIntroContentComponent },
    { path: 'skillsets', component: AboutSkillsetsContentComponent },
    { path: 'experience', component: AboutExperienceContentComponent },
    { path: 'education', component: AboutEducationContentComponent },
    { path: 'project1', component: ProjectProject1ContentComponent },
    { path: 'project2', component: ProjectProject2ContentComponent },
    { path: 'project3', component: ProjectProject3ContentComponent },
    { path: 'resume', component: ResumeContentComponent },
    { path: 'contact', component: ContactContentComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
