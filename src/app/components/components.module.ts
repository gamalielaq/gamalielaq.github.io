import { SharedMaterialModule } from './../shared/shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducacionComponent } from './educacion/educacion.component';


const components = [
    ExperienceComponent, ServicesComponent, SkillsComponent, TimeLineComponent, ProfileComponent, AboutmeComponent, EducacionComponent
];

@NgModule({
    declarations: [components],
    imports: [CommonModule, SharedMaterialModule],
    exports: [components, ]
})
export class ComponentsModule {}
