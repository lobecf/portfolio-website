import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'content', component: ContentWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
