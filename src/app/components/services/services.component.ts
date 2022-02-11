import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = services;
  constructor() { }

  ngOnInit(): void {
  }

}

const services = [ 
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'},
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'},
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'},
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'},
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'},
  {icon: 'assets/icons/matrix.svg', title: 'Desarrollo Web'}
]