import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { FeatureComponent } from './feature/feature.component';
import { ListagemComponent } from './produto/listagem/listagem.component';
import { UsuarioComponent } from './usuario/listagem/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'produto', component: ListagemComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'feature', component: FeatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
