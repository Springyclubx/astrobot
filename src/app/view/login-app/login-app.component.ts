import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../controller/auth/auth.service';
import { LoginUser } from '../../model/login-user';
import { Retorno } from '../../model/retorno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-app.component.html',
  styleUrl: './login-app.component.scss'
})
export class LoginAppComponent {

  constructor(private authService: AuthService, private router: Router) { }

  loginUser: LoginUser = {
    login: '',
    password: ''
  }

  login(): void {
    this.authService.login(this.loginUser).subscribe({
      next: (pToken) => {
        if (pToken != null) {
          localStorage.setItem('authToken', pToken.toString());
          console.log('Token salvo no localStorage:', pToken);
        } else {
          this.displayMessage({
            status: "Erro",
            mensagem: "Usuário ou senha inválidos."
          });
        }
      },
      error: (error) => {
        this.displayMessage({
          status: "Erro",
          mensagem: "Ocorreu um erro no login. Tente novamente."
        });
      },
      complete: () => {
        console.log('Login request complete.');
        this.router.navigate(['/home']);
      }
    });
  }

  displayMessage(retorno: Retorno) {
    const statusDiv = document.getElementById('statusMessagem');
    if (statusDiv == null) return;

    statusDiv.innerText = retorno.mensagem;
    statusDiv.className = 'status-message'; // Reseta a classe base
    if (retorno.status === 'Ok') {
      statusDiv.classList.add('success');
    } else {
      statusDiv.classList.add('error');
    }
  }
}
