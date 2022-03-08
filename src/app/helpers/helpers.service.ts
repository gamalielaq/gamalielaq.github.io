import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private menuItem$ = new BehaviorSubject<any>(null);
  menuActive$ = this.menuItem$.asObservable();

  constructor() {

  }

  set setMenu(item: any) {
    this.menuItem$.next(item);
  }

  downloadCv() {
    var a = document.createElement("a");
    a.href = "assets/doc/cv-gamaliel.pdf";
    a.setAttribute("download", "cv-gamaliel");
    a.click();
    console.log(a);
  }
}