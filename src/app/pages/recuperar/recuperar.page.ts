import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  // Titulo pagina.
  Title = 'Recuperar Contraseña';
  // contenedor para realizar update.
  usaurio: any = [];

  constructor(
    private userServices: UsersService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {}
  async crearToast(mensaje: string, duracion: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
    });
    toast.present();
  }

  CambiarPass(email) {
    this.userServices.getUserMail(email.value).subscribe((res) => {
      this.usaurio = res;
      if (this.usaurio[0] == undefined) {
        this.crearToast('Correo No Existe', 3000);
      } else {
        this.userServices
          .updateUserPass(this.usaurio[0].id, {
            fName: this.usaurio[0].fName,
            lName: this.usaurio[0].lName,
            uMail: this.usaurio[0].uMail,
            uPass: formatDate(
              this.usaurio[0].uBirth,
              'dd/MM/yyyy',
              'en-US',
              '-0400'
            ),
          })
          .subscribe(
            (update) => {
              this.crearToast(
                'Nueva Contraseña, Fecha Nacimiento formato. "dd/MM/yyyy" ',
                3000
              );
              console.log(formatDate(
                this.usaurio[0].uBirth,
                'dd/MM/yyyy',
                'en-US',
                '-0400'
              ));
              
            },
            (err) => this.crearToast('Correo No Existe', 3000)
          );
      }
    });
  }
}