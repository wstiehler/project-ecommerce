import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../entity/produto';

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) { }

    protected urlServer: string = 'http://localhost:3000/';
    
    obterListaProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.urlServer + 'produtos');
    }

}