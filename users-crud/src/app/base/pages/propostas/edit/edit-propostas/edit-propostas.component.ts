import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericService } from 'src/app/base/services/generic.service';

@Component({
  selector: 'app-edit-propostas',
  templateUrl: './edit-propostas.component.html',
  styleUrls: ['./edit-propostas.component.css'],
})
export class EditPropostasComponent implements OnInit {
  editProposta: UntypedFormGroup;

  constructor(
    private genericService: GenericService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  editForm() {
    this.editProposta = new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
      status: new UntypedFormControl('', [Validators.required]),
    });
  }

  onNoClick() {}
}
