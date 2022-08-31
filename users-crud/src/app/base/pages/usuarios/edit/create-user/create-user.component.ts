import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/base/models/usuario.model';
import { GenericService } from 'src/app/base/services/generic.service';
import { SwalService } from 'src/app/shared/services/swal.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  createUser: UntypedFormGroup;
  user: User;

  constructor(
    private genericService: GenericService,
    private swalService: SwalService,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.createUser = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      type: new UntypedFormControl('', [Validators.required]),
    });
  }

  create() {
    if (this.createUser.valid) {
      this.user = { ...this.createUser.value };
      this.genericService.createUsuario(this.user).subscribe({
        next: (data) => {
          this.swalService
            .success('Sucesso', 'Usuario criado com sucesso!', 'Ok')
            .then(() => {
              this.dialogRef.close();
            });
        },
        error: (err) => {
          this.swalService.error(
            'Error',
            'Ocorreu um erro ao tentar criar o usuario!',
            'Ok'
          );
        },
      });
      return;
    }
    this.swalService.warning('Aviso', 'Preencha os campos corretamente!', 'Ok');
  }
}
