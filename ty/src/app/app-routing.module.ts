import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NavebarComponent } from './component/navebar/navebar.component';
import { SignupComponent } from './component/signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'navebar',component:NavebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
