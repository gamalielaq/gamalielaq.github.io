import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './components/shared-component.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    SharedComponentModule,
    SharedMaterialModule
  ],
})
export class SharedModule {}
