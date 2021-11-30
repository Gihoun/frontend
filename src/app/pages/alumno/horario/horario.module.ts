import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { HorarioPageRoutingModule } from './horario-routing.module';
import { HorarioPage } from './horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HorarioPage]
})
export class HorarioPageModule {}
