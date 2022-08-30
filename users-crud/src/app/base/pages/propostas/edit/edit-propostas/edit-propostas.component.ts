import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Propostas } from 'src/app/base/models/propostas.model';
import { GenericService } from 'src/app/base/services/generic.service';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
  selector: 'app-edit-propostas',
  templateUrl: './edit-propostas.component.html',
  styleUrls: ['./edit-propostas.component.css'],
})
export class EditPropostasComponent implements OnInit {
  editProposta: FormGroup;
  proposta: Propostas;

  constructor(
    private genericService: GenericService,
    private swalService: SwalService,
    private dialogRef: MatDialogRef<EditPropostasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.editForm();
  }

  editForm() {
    this.editProposta = new FormGroup({
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
  }

  update() {
    if (this.editProposta.valid) {
      this.proposta = { ...this.editProposta.value };
      this.genericService.patchProposta(this.data.id, this.proposta).subscribe({
        next: (data) => {
          this.swalService
            .success('Sucesso', 'Proposta atualizada com sucesso!', 'Ok')
            .then(() => {
              this.dialogRef.close();
            });
        },
        error: (err) => {
          this.swalService.error(
            'Error',
            'Ocorreu um erro ao tentar atualizar a proposta!',
            'Ok'
          );
        },
      });
      return;
    }
    this.swalService.warning('Aviso', 'Preencha os campos corretamente!', 'Ok');
  }
}
