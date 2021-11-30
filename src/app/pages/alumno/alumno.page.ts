import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  usuario: any = [];

  constructor(
    private actRoute: ActivatedRoute,
    private barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController,
    private uService: UsersService
  ) {
    this.actRoute.queryParams.subscribe((params) => {
      this.usuario = JSON.parse(params.userlogin);
    });
  }

  ngOnInit() {}
  data: string = '';

  async scanCode() {
    this.barcodeScanner
      .scan()
      .then((result) => {
        if (result.text == '') {
          this.data = result.text;
        }else if(result.text != 'true'){
          result.text= 'false';
          this.ausentePrueba()
        }
        else {
          this.presente();
          this.data = result.text;
        }
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
  asiste(id: string) {
    if (id == 'true') {
      return true;
    } else {
      return false;
    }
  }
  async presente() {
    const alert = await this.alertCtrl.create({
      header: 'Asistencia',
      message: 'Presiona "Ok" para quedar presente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.uService
              .createAsistencia(this.asiste(this.data), this.usuario[0].id)
              .subscribe((res) => {
                console.log(res);
              });
          },
        },
      ],
    });

    await alert.present();

    await alert.onDidDismiss();
  }
  async ausentePrueba() {
    const alert = await this.alertCtrl.create({
      header: 'Modo Prueba',
      message: 'Presiona "Ok" para quedar ausente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.uService
              .createAsistencia(this.asiste(this.data), this.usuario[0].id)
              .subscribe((res) => {
                console.log(res);
              });
          },
        },
      ],
    });

    await alert.present();

    await alert.onDidDismiss();
  }
}
