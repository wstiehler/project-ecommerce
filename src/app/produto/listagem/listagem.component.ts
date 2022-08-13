import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [
  ]
})
export class ListagemComponent implements OnInit {

  constructor() { }

  public listaProdutos : string[] | undefined;

  ngOnInit(): void {
  }

}
