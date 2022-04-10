import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsComponent } from './tips.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [TipsComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ]
})
export class TipsModule { }
