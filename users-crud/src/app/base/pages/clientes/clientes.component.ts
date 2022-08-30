import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('clients').subscribe({
      next: (data) => {
        this.clientes = data;
      }
    });
  }

}
