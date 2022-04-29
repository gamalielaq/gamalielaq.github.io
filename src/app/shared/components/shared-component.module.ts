import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThemeService } from '../../services/theme.service';
import { ViewFileComponent } from './view-file/view-file.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ViewFileComponent, LoaderComponent],
  imports: [CommonModule,SharedMaterialModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, LoaderComponent],
  entryComponents: [],
  providers:[ThemeService]
})
export class SharedComponentModule {}
