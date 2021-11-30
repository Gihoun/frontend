import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocentePage } from './docente.page';

const routes: Routes = [
  {
    path: '',
    component: DocentePage
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle-docente/detalle-docente.module').then( m => m.DetalleDocentePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentePageRoutingModule {}
