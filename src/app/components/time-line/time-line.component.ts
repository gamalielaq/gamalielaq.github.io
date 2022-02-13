import { TimeLine } from '../../interfaces/timeline';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input() data: TimeLine[];

  constructor() { }

  ngOnInit(): void {
  }

}
