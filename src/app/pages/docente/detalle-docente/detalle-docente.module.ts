import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { DetalleDocentePageRoutingModule } from './detalle-docente-routing.module';

import { DetalleDocentePage } from './detalle-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDocentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleDocentePage]
})
export class DetalleDocentePageModule {}
