import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './components/shared-component.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedComponentModule ],
  exports: [
    CommonModule,
    SharedComponentModule
  ],
})
export class SharedModule {}
