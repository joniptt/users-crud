import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EditPropostasComponent } from './pages/propostas/edit/edit-propostas/edit-propostas.component';
import { PropostasComponent } from './pages/propostas/propostas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { CreatePropostaComponent } from './pages/propostas/edit/create-proposta/create-proposta.component';

@NgModule({
  declarations: [
    BaseComponent,
    ClientesComponent,
    PropostasComponent,
    RelatoriosComponent,
    EditPropostasComponent,
    CreatePropostaComponent,
  ],
  imports: [CommonModule, BaseRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BaseComponent],
})
export class BaseModule {}
