import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ViewFileComponent } from '../view-file/view-file.component'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  
  openViewCv() {
    this.dialog.open(ViewFileComponent, {
      data: {
        data: 'assets/doc/cv-gamaliel.pdf'
      }
    });
  }
}
