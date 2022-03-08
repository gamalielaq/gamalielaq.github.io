import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { SharedComponentModule } from './../shared/components/shared-component.module';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class PagesModule { }
