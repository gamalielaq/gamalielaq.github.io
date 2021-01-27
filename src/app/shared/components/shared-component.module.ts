import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [CommonModule,SharedMaterialModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  entryComponents: [],
})
export class SharedComponentModule {}
