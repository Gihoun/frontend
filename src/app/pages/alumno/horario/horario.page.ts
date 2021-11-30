import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {

  Title = 'Horario Alumno';
  icono = 'arrow-dropleft';
  usuario: any = [0];
  rol: string;
  asistencia: any = [];
  id: string;
  presente: boolean
  constructor(
    private actRoute: ActivatedRoute,
    private uService: UsersService,
  ) {}



  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.uService.getUserprofile(String(id)).subscribe((res) => {
        this.usuario = res;     
        this.rol = this.usuario[0].user_rol.desc_rol;           
      });
      this.uService.getAsistencia(String(id)).subscribe(
        (res)=> {
          this.asistencia = res
        }
      )
    });
  }

}
