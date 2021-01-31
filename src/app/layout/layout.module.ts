import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './content/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SidenavService } from '../back/services/sidenav.service';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule,SharedModule, RouterModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
  providers: [SidenavService]
})
export class LayoutModule { }
