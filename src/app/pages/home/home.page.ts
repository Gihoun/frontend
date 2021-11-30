import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalComponent } from 'src/app/components/login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Botones para el Modal y Link de activacion
  Student = 'Alumno';
  Teacher = 'Docente';
  linkE = '/alumno';
  linkD = '/docente';

  constructor(public modalCtrl: ModalController) {}

  //Abre el modal de Alumno
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
      componentProps: { name: this.Student, link: this.linkE },
    });
    await modal.present();
  }

  //Abre el modal de Docente
  async openModal2() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
      componentProps: { name: this.Teacher, link: this.linkD },
    });
    await modal.present();
  }
}
