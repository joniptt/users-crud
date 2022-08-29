import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginRequest() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.authService.login(this.user).subscribe({
        next: (data) => {
          this.router.navigate(['base']);
        },
      });
      return;
    }
  }
}
