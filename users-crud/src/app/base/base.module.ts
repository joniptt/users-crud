import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EditPropostasComponent } from './pages/propostas/edit/edit-propostas/edit-propostas.component';
import { PropostasComponent } from './pages/propostas/propostas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { EditClientesComponent } from './pages/clientes/edit/edit-clientes/edit-clientes.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    BaseComponent,
    ClientesComponent,
    PropostasComponent,
    RelatoriosComponent,
    EditClientesComponent,
    EditPropostasComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, BaseRoutingModule,SharedModule],
  exports: [BaseComponent],
  providers:[{ provide: MAT_DIALOG_DATA, useValue: {} },]
  
})
export class BaseModule {}
