import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';

export const ViewRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: AboutmeComponent
      },
      {
        path: 'aboutme', component: AboutmeComponent
      }
    ],
  },
];

