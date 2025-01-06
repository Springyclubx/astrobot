import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from '../../model/register-user';
import { Retorno } from '../../model/retorno';
import { LoginUser } from '../../model/login-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private vHttp: HttpClient) { }

  register(pRegisterUser: RegisterUser): Observable<Retorno> {
    return this.vHttp.post<Retorno>('http://localhost:8080/auth/register', pRegisterUser);
  }

  login(pLoginUser: LoginUser): Observable<String> {
    return this.vHttp.post<String>('http://localhost:8080/auth/login', pLoginUser);
  }
}
