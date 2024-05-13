import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AldahirPage } from './aldahir.page';

const routes: Routes = [
  {
    path: '',
    component: AldahirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AldahirPageRoutingModule {}
