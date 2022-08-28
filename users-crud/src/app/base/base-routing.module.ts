import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUARDS, PermissionsGuard } from '../core/guards/permissions.guard';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [PermissionsGuard],
    data: { guards: [GUARDS.ADMIN] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
