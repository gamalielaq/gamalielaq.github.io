import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit {

  currentPdf : any;
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any

  ) {}

  async ngOnInit(): Promise<any> {
    if (this.data.data !== null || this.data.data !== undefined) {
      console.log(this.data.data);
      
      this.currentPdf = this.data.data;
    }
  }

}
