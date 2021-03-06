import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';
import { DocentePageRoutingModule } from './docente-routing.module';
import { DocentePage } from './docente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePageRoutingModule,
    ComponentsModule,
    NgxQRCodeModule,
  ],
  declarations: [DocentePage],
})
export class DocentePageModule {}
