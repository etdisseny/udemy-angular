//Importar modulos del router de angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//Array de configuración de la ruta
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'videojuego', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre/:followers', component: CursosComponent},
  {path:'externo', component: ExternoComponent},
  {path:'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
