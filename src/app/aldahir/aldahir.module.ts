import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AldahirPageRoutingModule } from './aldahir-routing.module';

import { AldahirPage } from './aldahir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AldahirPageRoutingModule
  ],
  declarations: [AldahirPage]
})
export class AldahirPageModule {}
