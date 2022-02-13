import { Injectable } from '@angular/core';

@Injectable({
	providedIn:'root'
})
export class HelperService {
    downloadCv() {
        var a = document.createElement("a");
        a.href = "assets/doc/cv-gamaliel.pdf";
        a.setAttribute("download", "cv-gamaliel");
        a.click();
        console.log(a);
      }
}