import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPRAR_ROUTES } from './comprar.routes';
import { appService } from '../app.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COMPRAR_ROUTES)
  ],
  declarations: [
  ],
  providers: [appService],
  exports: []
})
export class ComprarModule { }
