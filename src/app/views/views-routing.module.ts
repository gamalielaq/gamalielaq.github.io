import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

export const ViewRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: AboutmeComponent
      },
      {
        path: 'aboutme', component: AboutmeComponent
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'portafolio', component: PortafolioComponent
      }
    ],
  },
];
