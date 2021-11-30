import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standar-header',
  templateUrl: './standar-header.component.html',
  styleUrls: ['./standar-header.component.scss'],
})
export class StandarHeaderComponent implements OnInit {
  //Input para titulos e Iconos de los header comunes.
  @Input() pageTitle: string;
  @Input() icono: string;

  constructor() {}

  ngOnInit() {}
}
