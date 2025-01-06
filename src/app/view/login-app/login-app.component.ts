import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../controller/auth/auth.service';
import { LoginUser } from '../../model/login-user';
import { Retorno } from '../../model/retorno';

@Component({
  selector: 'app-login-app',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-app.component.html',
  styleUrl: './login-app.component.scss'
})
export class LoginAppComponent {

  constructor(private authService: AuthService) { }

  loginUser: LoginUser = {
    login: '',
    password: ''
  }

  login(): void {
    this.authService.login(this.loginUser).subscribe(
    
      (pToken) => {
        if (pToken != null) {
          this.displayMessage({
            status: "Ok",
            mensagem: "Cadastro encontrado."
          });
        } else {
          this.displayMessage({
            status: "Erro",
            mensagem: "Cadastro não encontrado."
          });

        }
      }
    )
  }

  displayMessage(retorno: Retorno) {
    const statusDiv = document.getElementById('statusMessagem');
    if (statusDiv == null) return;

    statusDiv.innerText = retorno.status + " - " + retorno.mensagem;
    if (retorno.status === 'Ok') {
      statusDiv.className = 'response success';
    } else {
      statusDiv.className = 'response error';
    }
  }
}
