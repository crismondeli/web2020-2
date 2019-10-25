import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {

  public var1 = "ejemplo"
  public libroexistencia = " 132465"
  public cantidad = "2653213 "

  constructor() { }

    ngOnInit() {
  }

}
