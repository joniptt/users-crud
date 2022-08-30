import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask'




@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,MatSelectModule,NgxMaskModule.forRoot()    ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, FormsModule, MatInputModule, ReactiveFormsModule,MatSelectModule],
})
export class SharedModule { }
