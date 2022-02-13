import { HelperService } from './../../helpers/helpers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

  download() {
    this.helperService.downloadCv();
  }
}
