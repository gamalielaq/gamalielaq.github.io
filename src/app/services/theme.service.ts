import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThemeService {

  private linkTheme  = document.querySelector('#theme');

  constructor(private http:HttpClient) {
    
    const url = localStorage.getItem('theme') || '../../assets/theme/css/theme-light.css'
    
    this.linkTheme?.setAttribute('href', url);

  }

  getThemes() {
    return this.http.get<any>('../../../assets/json/themes.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { 
        return data; 
      });
  }

  changeTheme(value:boolean) {
    let theme: string;
    if(!value) {
        theme = "theme-light"
    }else {
        theme = "theme-dark"
    }
    const url = `../../../assets/theme/css/${theme}.css`;          
    this.linkTheme?.setAttribute('href', url);  
    localStorage.setItem('theme', url);
  }

}
