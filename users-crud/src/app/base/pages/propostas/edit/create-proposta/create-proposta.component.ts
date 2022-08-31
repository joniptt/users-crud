import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/base/models/clients.model';
import { Propostas } from 'src/app/base/models/propostas.model';
import { GenericService } from 'src/app/base/services/generic.service';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.css'],
})
export class CreatePropostaComponent implements OnInit {
  cadProposta: UntypedFormGroup;
  clientes: Client[];
  proposta: Propostas;

  constructor(
    private genericService: GenericService,
    private swalService: SwalService,
    private dialogRef: MatDialogRef<CreatePropostaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.cadProposta = new UntypedFormGroup({
      description: new UntypedFormControl('', [Validators.required]),
      status: new UntypedFormControl('', [Validators.required]),
    });
  }

  create() {
    if (this.cadProposta.valid) {
      this.proposta = { ...this.cadProposta.value };
      this.genericService.patchProposta(this.data.id, this.proposta).subscribe({
        next: (data) => {
          this.swalService
            .success('Sucesso', 'Proposta cadastrada com sucesso!', 'Ok')
            .then(() => {
              this.dialogRef.close();
            });
        },
        error: (err) => {
          this.swalService.error(
            'Error',
            'Ocorreu um erro ao tentar cadastrar a proposta!',
            'Ok'
          );
        },
      });
      return;
    }
    this.swalService.warning('Aviso', 'Preencha os campos corretamente!', 'Ok');
  }
}
