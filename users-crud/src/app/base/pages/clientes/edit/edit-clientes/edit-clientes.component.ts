import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/base/models/clients.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent implements OnInit {
  formCliente: FormGroup;
  users: any = [];
  internalResponsible: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Client = new Client(), private http: HttpClient) { }

  ngOnInit() {
    this.loadUsers();
    this.formCliente = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.maxLength(14), Validators.minLength(11)]),
      telefone: new FormControl('', [Validators.maxLength(11), Validators.minLength(11)]),
      email: new FormControl('', [Validators.email]),
      responsiblePerson: new FormControl(''),
      internalResponsible: new FormControl(0),
    })
  }

  loadUsers() {
    this.http.get('usuarios').subscribe({
      next: (data) => {
        this.users = data;
      }
    })
  }

  save() {
    if (!this.formCliente.valid) {
      return;
    }
    if (this.data) {
      let user = this.formCliente.value;
      user.id = this.data.id;
    }
  }
  cancel() { }
}


