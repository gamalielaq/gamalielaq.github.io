import { HelperService } from './../../../helpers/helpers.service';
import { Component, ViewChild, Inject, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/services/sidenav.service';
import { ThemeService } from 'src/app/services/theme.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewFileComponent } from '../view-file/view-file.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { MENU } from '../../../helpers/constans';

interface Food {
  value: string;
  viewValue: string;
  imgPais: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  form: FormGroup;
  themes: any[];
  switch: boolean = false;
  urlLanguage: string;
  menu = MENU;
  @ViewChild('drawer') public drawer: MatSidenav;
  @ViewChild("header") header: ElementRef;

  languages: Food[] = [
    { value: 'Italiano', viewValue: 'Italiano', imgPais: "assets/img/IT.svg" },
    { value: 'Español', viewValue: 'Español', imgPais: "assets/img/PE.svg" }
  ];


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private sidenav: SidenavService,
    private themeService: ThemeService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private helperService: HelperService
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.renderer.addClass(this.header.nativeElement, "header-effect");
    } else {
      this.renderer.removeClass(this.header.nativeElement, "header-effect");
    }
  }


  ngOnInit(): void {
    let sw = localStorage.getItem('switch');
    if (sw == "true") {
      this.switch = true;
    } else {
      this.switch = false;
    }
    this.builForm();
    this.cargarData();
    const itemId = localStorage.getItem('itemdId');
    const nagigated = itemId ? itemId : 'aboutme';
    this.navigated(nagigated);

  }

  ngAfterViewInit(): void { //Despues de cargar mi pagina
    this.sidenav.setSidenav(this.drawer);
  }

  navigated(itemId: string) {
    if (itemId === 'tips') {
      this.router.navigate(['/tips']);
      return;
    }
    this.helperService.setMenu = itemId;
    localStorage.setItem('itemdId', itemId);
  }

  builForm() {
    this.form = this.fb.group({
      language: ['']
    })

    this.form.get('language')?.valueChanges.subscribe((value) => {
      if (value == 'Italiano') {
        this.urlLanguage = 'assets/img/IT.svg';
      } else {
        this.urlLanguage = 'assets/img/PE.svg';
      }
      console.log(value);
    });
  }


  cargarData() {
    this.form.reset({language: "Español"});
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
    if (this.switch) {
      localStorage.setItem('switch', "true");
    } else {
      localStorage.setItem('switch', "false");
    }
  }

  async dowloandPdfRespuesta() {
    const byteArray = "";
    const blobAnswer: Blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blobAnswer);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = 'cv-gamaliel.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();

  }

  downloadCv() {
    var a = document.createElement("a");
    a.href = "assets/doc/cv-gamaliel.pdf";
    a.setAttribute("download", "cv-gamaliel");
    a.click();
    console.log(a);
  }

  openViewCv() {
    this.dialog.open(ViewFileComponent, {
      data: {
        data: 'assets/doc/cv-gamaliel.pdf'
      }
    });
  }
}