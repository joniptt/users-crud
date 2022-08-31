import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  constructor(private authService:AuthService) {}

  ngOnInit(): void {}


  logout(){
    this.authService.logout('login');

  }
}
