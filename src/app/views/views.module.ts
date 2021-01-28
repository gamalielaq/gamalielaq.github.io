import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidenavService } from '../back/services/sidenav.service';
import { ThemeService } from '../back/services/theme.service';
import { ViewRoutes } from './views-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileDescriptionComponent } from './modals/profile-description/profile-description.component'

@NgModule({
  declarations: [HomeComponent,AboutmeComponent,TimeLineComponent, ServicesComponent, ExperienceComponent, SkillsComponent, ProfileDescriptionComponent],
  imports: [CommonModule, SharedModule,  RouterModule.forChild(ViewRoutes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],  
  providers: [SidenavService, ThemeService]
})
export class ViewsModule { }
