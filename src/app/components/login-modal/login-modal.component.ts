import { Component, Input, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  NavController,
} from '@ionic/angular';

import { UsersService } from 'src/app/services/users.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  // Input para diferenciar lor login de alumno y docente, con sus respectivos link.
  @Input() name: string;
  @Input() link: string;
  //Contenedor de Usuarios.
  userLog: any = [];

  constructor(
    private modalCtrl: ModalController,
    private uService: UsersService,
    private navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}
  //funcion para cerrar el Modal
  dimissModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {}
  // funcion para realizar el login
  logIn(email, pass) {
    this.uService.getUser(email.value, pass.value).subscribe((res) => {
      this.userLog = res;   
      const navigationExtras: NavigationExtras = {
        queryParams: {
          userlogin: JSON.stringify(this.userLog),
        },
      };
      if (this.userLog[0] == undefined) {
        this.failLogin();
      } else {
        if (this.userLog[0].user_rol.desc_rol == 'Alumno') {
          this.navCtrl.navigateForward(['/alumno'], navigationExtras);
          this.modalCtrl.dismiss();
        } else if (this.userLog[0].user_rol.desc_rol == 'Docente') {
          this.navCtrl.navigateForward(['/docente'], navigationExtras);
          this.modalCtrl.dismiss();
        } else {
          this.failLogin();
        }
      }
    });
  }
  //funcion para validar contrasennia y correo
  async failLogin() {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: 'Correo o Contraseña incorrectos.',
      buttons: ['OK'],
    });

    await alert.present();

    await alert.onDidDismiss();
  }
}
