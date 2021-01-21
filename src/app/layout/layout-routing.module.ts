import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './content/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutmeComponent } from '../components/aboutme/aboutme.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'', component:HomeComponent,
       // loadChildren: () => import('./../views/home/dashboard.module').then((m) => m.DashboardModule),
      },
      {path:'aboutme', component:AboutmeComponent}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
