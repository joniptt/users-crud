import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
})
export class SharedModule {}
