import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExcosComponent } from './components/excos/excos.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'staff',
    component: StaffComponent
  },

  {
    path: 'excos',
    component: ExcosComponent
  },

  {
    path: 'gallery',
    component: GalleryComponent
  },

  {
    path: 'news',
    component: NewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
