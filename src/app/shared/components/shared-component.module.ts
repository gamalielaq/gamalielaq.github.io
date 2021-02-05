import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThemeService } from '../../back/services/theme.service';
import { ViewFileComponent } from './view-file/view-file.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ViewFileComponent],
  imports: [CommonModule,SharedMaterialModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  entryComponents: [],
  providers:[ThemeService]
})
export class SharedComponentModule {}
