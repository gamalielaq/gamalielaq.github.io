import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './content/layout.component';
import { HomeComponent } from '../views/pages/home/home.component';
import { AboutmeComponent } from '../views/pages/aboutme/aboutme.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
       loadChildren: () => import('./../views/views.module').then((m) => m.ViewsModule),
      }
      // {path:'aboutme', component:AboutmeComponent}
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
