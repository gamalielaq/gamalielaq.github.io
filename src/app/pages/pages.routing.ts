import { TipsComponent } from './tips/tips.component';
import { ProfileComponent } from './../components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./child.routing').then((m) => m.ChildRoutsModule)
    },
    {
        path: 'tips',
        component: TipsComponent,
    },
    {
        path: 'not-found',
        component: ProfileComponent
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
