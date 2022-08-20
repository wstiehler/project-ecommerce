import { Component, OnInit } from '@angular/core';
import { Produto } from '../entity/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [
  ]
})
export class ListagemComponent implements OnInit {

  constructor(private ProdutoService:ProdutoService) {

  }

  public listaProdutos : Produto[] =  []; 

  ngOnInit() {
    this.ProdutoService.obterListaProdutos().subscribe(
      produtos => {
        this.listaProdutos = produtos;
        console.log("produtos:", produtos);
      },
      error => {
        console.log(error);
      }
    )
  }

}
