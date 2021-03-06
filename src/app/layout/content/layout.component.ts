import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { onSideNavChange  } from '../../animatios/animations'
import { Router } from '@angular/router';

import { SidenavService } from '../../back/services/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [onSideNavChange ]
})
export class LayoutComponent implements OnInit {
  
  private mediaMatcher:MediaQueryList = matchMedia("max-width:720px")
  layout : boolean = false;
  url: string;
  @ViewChild('drawer') public drawer: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    private _activatedRoute: Router
  ) {
      this._activatedRoute.events.subscribe( (url: any) => { 
      
        this.layout = this.getStatusRouting(url);

      })
  	}
  
  change = false;

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void { //Despues de cargar mi pagina
    this.sidenavService.setSidenav(this.drawer);
  }


  screenSmall(){ // retorna true o false
    return this.mediaMatcher.matches;
  }

  getStatusRouting(url: any) {
    let response : boolean = false;
    if(url.url!= undefined && url.url == '/portafolio') {
      response = true;
    }
    return response;
  } 
}
