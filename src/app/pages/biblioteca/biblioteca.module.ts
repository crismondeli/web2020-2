import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TiposComponent } from './tipos/tipos.component';
import { AreasComponent } from './areas/areas.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';


@NgModule({
  declarations: [EditorialComponent,
                 AutoresComponent, 
                 TiposComponent, 
                 AreasComponent, 
                 LibroComponent, 
                 ExistenciaComponent
                ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
