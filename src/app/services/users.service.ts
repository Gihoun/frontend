import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interface para la modificacionde usaurio.
export interface Usuario {
  id?: string;
  fName: string;
  lName: string;
  uMail: string;
  uPass: string;
  uBirth?: Date;
  uPhoto?: any;
  user_rol?: any;
}
export interface Asistencia {
  id?: string;
  estado_asistencia: boolean;
  appuser?: any;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient) {}

  // Ruta de la API
  API = 'https://tu-asistencia-app-heroku.herokuapp.com/appusers';

  QrApi = 'https://tu-asistencia-app-heroku.herokuapp.com/asistencias';

  //METODOS CRUD
  //Lista solo de Usuarios con el Rol de alumnos.
  getAsistencia(id: string) {
    return this.client.get(this.QrApi + '?appuser.id=' + id);
  }
  getAlumnos() {
    return this.client.get(this.API + '?user_rol.desc_rol=Alumno');
  }
  //Lista todos los usuarios del sistema.
  getAllusers() {
    return this.client.get(this.API);
  }
  //Realiza un login
  getUser(email: String, pass: String) {
    return this.client.get(this.API + '?uMail=' + email + '&uPass=' + pass);
  }
  //Obtienes los datos de un usuario unico por id
  getUserprofile(id: String) {
    return this.client.get(this.API + '?id=' + id);
  }
  //Eliminar alumno
  deleteAlumno(id: string) {
    return this.client.delete(`${this.API}/${id}`);
  }
  //registra nuevos alumnos
  createAlumnos(
    fName: string,
    lName: string,
    uMail: string,
    uPass: string,
    uBirth: Date,
    uPhoto,
    user_rol
  ) {
    return this.client.post(this.API, {
      fName,
      lName,
      uMail,
      uPass,
      uBirth,
      uPhoto,
      user_rol,
    });
  }
  //
  getUserMail(uMail: string) {
    return this.client.get(this.API + '?uMail=' + uMail);
  }

  updateUserPass(id: string, usuario: Usuario) {
    return this.client.put(`${this.API}/${id}`, usuario);
  }
  createAsistencia(estado_asistencia: boolean, appuser: string) {
    return this.client.post(this.QrApi, { estado_asistencia, appuser });
  }
}
