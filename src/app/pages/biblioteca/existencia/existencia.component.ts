import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {

  public var1 : String;
  public libroexistencia : String;


  constructor() { }

    ngOnInit() {

  }

  saveForm(){
    alert(this.var1)
  }

}
