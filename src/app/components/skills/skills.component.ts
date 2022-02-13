import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  habilidades: any[] = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'Primeng' },
    { name: 'Type Script' },
    { name: 'Java Script' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'SASS' },
    { name: 'Botstrap ' },
    { name: 'Git ' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
