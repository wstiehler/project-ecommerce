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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenusComponent,
    ContatoComponent,
    HomeComponent,
    SobreComponent,
    FeatureComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
