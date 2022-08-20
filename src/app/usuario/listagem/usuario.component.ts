import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entity/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(private UsuarioService:UsuarioService) {

  }

  public listaUsuarios : Usuario[] =  []; 

  ngOnInit() {
    this.UsuarioService.obterListaUsuarios().subscribe(
      usuarios => {
        this.listaUsuarios = usuarios;
        console.log("usuarios:", usuarios);
      },
      error => {
        console.log(error);
      }
    )
  }

}
