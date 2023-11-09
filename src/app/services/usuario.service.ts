import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  obterUsuarios(){
    return this.http.get(environment.urlApi + 'usuario');
  }
  inserirUsuario(usuario: any){
    return this.http.post(environment.urlApi + 'usuario', usuario);
  }
}
