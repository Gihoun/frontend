import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoPage } from './alumno.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoPage
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  {
    path: 'horario/:id',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoPageRoutingModule {}
