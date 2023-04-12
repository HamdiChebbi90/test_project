import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './module/dashbord/dashbord.component';
import { DefaultComponent } from './default/default.component';
import { PostsComponent } from './module/posts/posts.component';
import { AcceuilComponent } from './portfolio/acceuil/acceuil.component';
import { LoginComponent } from './portfolio/login/login.component';
import { RegisterComponent } from './portfolio/register/register.component';
import { HomeComponent } from './portfolio/home/home.component';

const routes: Routes = [{

  path:'',
  component: DefaultComponent,
  children: [{
    path: 'dashbord',
    component: DashbordComponent },
  {
    path: 'posts',
  component: PostsComponent,
  }

// ]},{

//   path: 'acc',
// component: AcceuilComponent,
// children: [{
//   path: 'login' ,
//   component: LoginComponent },
// {
//   path: 'register',
//   component: RegisterComponent,
// },
// {
//   path: 'home',
//   component: HomeComponent,
// }

]

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
