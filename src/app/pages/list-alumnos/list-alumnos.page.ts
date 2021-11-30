import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.page.html',
  styleUrls: ['./list-alumnos.page.scss'],
})
export class ListAlumnosPage implements OnInit {
  // Titulo de la pagina.
  Title = 'Lista de Alumnos';
  // Lista de Alumnos.
  usuarios: any = [];

  // Carga de la Lista de alumnos.
  ListAlumnos() {
    this.uService.getAlumnos().subscribe((res) => {
      this.usuarios = res;
    });
  }

  constructor(
    private uService: UsersService,
    private navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.ListAlumnos();
  }
  ionViewWillEnter() {
    this.ListAlumnos();
  }
  ionViewDidEnter(){
    this.ListAlumnos();
  }
  async delAlumno(id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Cuidado, eliminara un gran Alumno',
      message: 'Está seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.uService.deleteAlumno(id).subscribe(
              (res) => {
                this.ListAlumnos();
              },
              (err) => console.log(err)
            );
          },
        },
      ],
    });
    await alert.present();
  }
}
