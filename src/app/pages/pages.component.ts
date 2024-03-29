import { MENU } from './../helpers/constans';
import { HelperService } from './../helpers/helpers.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  open: boolean = false;
  activeItem: string;
  menu = MENU;
  @ViewChild('content', {static: true}) content: ElementRef;
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.helperService.menuActive$.subscribe( itemId => {
      this.activeItem = itemId;
      this.menu.map( x => {
        if(x.id === itemId ) {
          x.active = true
        } else {
          x.active = false;
        }
      })

    })


  }

  active(item: string)  {
    // return 'fadeInLeft'
      return item == this.activeItem? true: false; 
  }

  navigate() {
    document.getElementById(`sd`)?.focus
  }

  


}
