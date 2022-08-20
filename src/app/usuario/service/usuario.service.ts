import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entity/usuario';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    protected urlServer: string = 'http://localhost:3000/';
    
    obterListaUsuarios(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.urlServer + 'usuarios');
    }

}