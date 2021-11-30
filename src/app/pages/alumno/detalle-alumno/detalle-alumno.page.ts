import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
  Title = 'Perfil Alumno';
  icono = 'arrow-dropleft';
  usuario: any = [0];
  rol: string;
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
    });
  }
}

