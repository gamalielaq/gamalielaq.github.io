import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/back/services/sidenav.service';
import { ThemeService } from 'src/app/back/services/theme.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  themes: any[];
  switch: boolean = false;
  @ViewChild('drawer') public drawer: MatSidenav;
  constructor(
    private router: Router,
    private sidenav : SidenavService,
    private themeService: ThemeService
    ) { 
    
    }
    
  ngOnInit(): void {
    let sw = localStorage.getItem('switch');
    if(sw=="true") {
      this.switch= true;
    }else {
      this.switch= false;
    }
  }

  ngAfterViewInit(): void { //Despues de cargar mi pagina
    this.sidenav.setSidenav(this.drawer);
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
  
  sideToogle() {
		this.sidenav.toggle();  
  }
  
  changeTheme() {
    console.log(this.switch);
    this.themeService.changeTheme(this.switch);
    this.storage();
  }
  storage() {
    if(this.switch) {
      localStorage.setItem('switch', "true");
    }else {
      localStorage.setItem('switch', "false");
    }
  }
}
