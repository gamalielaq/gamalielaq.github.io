import { HelperService } from './../../helpers/helpers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit(): void {

  }

}
