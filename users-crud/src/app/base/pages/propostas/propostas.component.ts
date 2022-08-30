import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Propostas } from '../../models/propostas.model';
import { GenericService } from '../../services/generic.service';
import { EditPropostasComponent } from './edit/edit-propostas/edit-propostas.component';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnInit {
  propostas: Propostas[];
  constructor(
    private genericService: GenericService,
    public dialog: MatDialog,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {
    this.getPropostas();
  }

  getPropostas() {
    this.genericService.getPropostas().subscribe({
      next: (data) => {
        this.propostas = data;
      },
    });
  }

  delete(id: number) {
    this.swalService
      .warning('Aviso', 'Deseja excluir a proposta?', 'Confirmar')
      .then((result) => {
        if (result.isConfirmed) {
          this.genericService.deleteProposta(id).subscribe({
            next: () => {
              this.swalService.success('Sucesso', 'Proposta excluida', 'Ok');
            },
            error: () => {
              this.swalService.error(
                'Error',
                'Ocorreu um erro ao tentar excluir a proposta',
                'Ok'
              );
            },
          });
        }
      });
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(EditPropostasComponent, {
      width: '90%',
      height: '90%',
      data: id,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
