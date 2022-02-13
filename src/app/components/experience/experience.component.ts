import { TimeLine } from '../../interfaces/timeline';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: TimeLine[] = [
    {cargo:'Programador Front End', direccion:'San Isidro - Lima Perú', empresa:'SIGCOMT', startDate: '06/2020', endDate: '06/2021' },
    {cargo:'Programador Web', direccion:'Trento Italia', empresa:'GPI', startDate: '07/2018', endDate: '12/2019' },
    {cargo:'Maquetador Web', direccion:'Trento Italia', empresa:'GPI', startDate: '02/2018', endDate: '06/2018' },
    {cargo:'Practicante programador Web', direccion:'San Juan de Miraflres', empresa:'Ugel 01', startDate: '02/2017', endDate: '01/2018' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
