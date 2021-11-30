import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.page.html',
  styleUrls: ['./detalle-docente.page.scss'],
})
export class DetalleDocentePage implements OnInit {
  Title = 'Perfil Docente';
  icono = 'back';
  usuario: any = [0];
  rol: string;
  constructor(
    private actRoute: ActivatedRoute,
    private uService: UsersService
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