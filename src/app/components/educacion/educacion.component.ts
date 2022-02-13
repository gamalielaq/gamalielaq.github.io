import { TimeLine } from '../../interfaces/timeline';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  data: TimeLine[] = [
    {cargo:'Computación e Informatica', direccion:'Manchay - Pachacamác', empresa:'ISTP. Trentino Juan Pablo II', startDate: '02/2013', endDate: '12/2016' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
