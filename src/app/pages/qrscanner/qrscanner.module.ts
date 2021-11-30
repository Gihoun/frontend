import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { QrscannerPageRoutingModule } from './qrscanner-routing.module';
import { QrscannerPage } from './qrscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrscannerPageRoutingModule,
    NgxQRCodeModule,
    ComponentsModule,
  ],
  declarations: [QrscannerPage],
})
export class QrscannerPageModule {}
