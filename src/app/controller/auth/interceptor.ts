import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Interceptor chamado para a requisição:', req.url);

  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    console.log('Token encontrado, adicionando ao header...');
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    console.log('Requisição clonada com headers:', authRequest.headers);
    return next(authRequest);
  }

  console.log('Nenhum token encontrado, enviando requisição sem token...');
  return next(req);
};