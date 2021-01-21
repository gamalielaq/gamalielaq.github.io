import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule,SharedMaterialModule],
  exports: [HeaderComponent],
  entryComponents: [],
})
export class SharedComponentModule {}
