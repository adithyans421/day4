import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'contact',component:ContactPageComponent
  },
  {
    path:'signin',component:SigninPageComponent
  },
  {
  path:'signup',component:SignupPageComponent
  },
  {
    path:'district',component:DistrictPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
