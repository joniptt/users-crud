import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule, IConfig } from 'ngx-mask'




@NgModule({
<<<<<<< HEAD
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,MatSelectModule,],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, FormsModule, MatInputModule, ReactiveFormsModule,MatSelectModule],
=======
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
>>>>>>> e995bf655eac9449e6070ae0fadea819c97f7b1b
})
export class SharedModule { }
