import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenusComponent } from './navegacao/menus/menus.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeatureComponent } from './feature/feature.component';
import { ListagemComponent } from './produto/listagem/listagem.component';
import { UsuarioComponent } from './usuario/listagem/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produto/service/produto.service';
import { UsuarioService } from './usuario/service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenusComponent,
    ContatoComponent,
    HomeComponent,
    SobreComponent,
    FeatureComponent,
    ListagemComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
