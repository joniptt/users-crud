import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EditClientesComponent } from './pages/clientes/edit/edit-clientes/edit-clientes.component';
import { EditPropostasComponent } from './pages/propostas/edit/edit-propostas/edit-propostas.component';
import { PropostasComponent } from './pages/propostas/propostas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { CreateUserComponent } from './pages/usuarios/edit/create-user/create-user.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgxMaskModule } from 'ngx-mask';
import { CreatePropostaComponent } from './pages/propostas/edit/create-proposta/create-proposta.component';
import { TrocarSenhaComponent } from './pages/trocar-senha/trocar-senha.component';

@NgModule({
  declarations: [
    BaseComponent,
    ClientesComponent,
    PropostasComponent,
    RelatoriosComponent,
    EditClientesComponent,
    EditPropostasComponent,
    CreatePropostaComponent,
    UsuariosComponent,
    CreateUserComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    TrocarSenhaComponent
  ],
  exports: [BaseComponent],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class BaseModule {}
