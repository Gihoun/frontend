import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.page.html',
  styleUrls: ['./estudiante-add.page.scss'],
})
export class EstudianteAddPage implements OnInit {
  Title = 'Formulario de Registro.';
  rol = '619d1eddcd08061e84f94a05';
  setimg = null;
  constructor(
    private uService: UsersService,
    private router: Router,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  testeoLogin(firstName, lastName, uMail, birth, pass) {
    if (
      firstName.value == '' ||
      lastName.value == '' ||
      uMail.value == '' ||
      birth.value == '' ||
      pass.value == ''
    ) {
      this.failCreate();
    } else {
      this.addEstudiante(firstName, lastName, uMail, birth, pass);
    }
  }
  addEstudiante(firstName, lastName, uMail, birth, pass) {
    this.uService
      .createAlumnos(
        firstName.value,
        lastName.value,
        uMail.value,
        birth.value,
        pass.value,
        this.setimg,
        this.rol
      )
      .subscribe(
        (res) => {
          this.successCreate();
          this.router.navigate(['/home']);
        },
        (err) => {
          this.failCreate();
        }
      );
  }

  async successCreate() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      message: 'Cuenta creada con exito',
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss();
  }
  async failCreate() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Error!!!',
      message: 'Al enviar el formulario.',
      buttons: ['OK'],
    });

    await alert.present();
    await alert.onDidDismiss();
  }
}
