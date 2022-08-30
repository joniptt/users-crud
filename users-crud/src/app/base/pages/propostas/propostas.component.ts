import { Component, OnInit } from '@angular/core';
import { Propostas } from '../../models/propostas.model';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnInit {
  propostas: Propostas[];
  constructor(private genericService: GenericService) {}

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
}
