import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule,MatDialogModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule,MatDialogModule],
})
export class SharedModule {}
