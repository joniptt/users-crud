import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PropostasComponent } from './pages/propostas/propostas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';


@NgModule({
  declarations: [
    BaseComponent,
    ClientesComponent,
    PropostasComponent,
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
