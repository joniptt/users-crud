import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';
import { User } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private swalService: SwalService
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  loginRequest() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.authService.login(this.user).subscribe({
        next: (data) => {
          this.swalService
            .success('Sucesso', 'Login efetuado com sucessso!', 'Confirmar')
            .then((result) => {
              this.router.navigate(['home']);
            });
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
