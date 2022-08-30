import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SwalService } from 'src/app/shared/services/swal.service';
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
  manterLogado = false;

  constructor(
    private cookies: CookieService,
    private authService: AuthService,
    private router: Router,
    private swalService: SwalService
  ) { }

  ngOnInit(): void {
    this.manterLogado = Boolean(this.cookies.get('manterLogado'));
    if (this.manterLogado) {
      this.router.navigate(['/home']);
    }
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginRequest() {


    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.authService.login(this.user).subscribe({
        next: (data) => {

          this.cookies.set('manterLogado', this.manterLogado.toString());
          this.router.navigate(['/home']);

        },
      });
      return;
    }
    this.swalService.warning(
      'Aviso!',
      'Preencha os campos corretamente!',
      'Ok'
    );
  }
}
