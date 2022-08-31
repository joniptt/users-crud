import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwalService } from 'src/app/shared/services/swal.service';
import { User } from '../../models/usuario.model';
import { GenericService } from '../../services/generic.service';
import { CreateUserComponent } from './edit/create-user/create-user.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];

  constructor(
    private genericService: GenericService,
    public dialog: MatDialog,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.genericService.getUsuarios().subscribe({
      next: (data) => {
        this.users = data;
      },
    });
  }

  create() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '35%',
      height: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUsers();
    });
  }
}
