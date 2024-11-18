import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

export const routes: Routes = [
    {path: 'categorias', component: CategoriaComponent},
    {path: 'categorias/novo', component: CategoriaFormComponent},
    {path: 'categorias/editar/:id', component: CategoriaFormComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'usuarios/novo', component: UsuarioFormComponent},
    {path: 'usuarios/editar/:id', component: UsuarioFormComponent},
    {path: 'noticias', component: NoticiaComponent},
    {path: 'noticias/novo', component: NoticiaFormComponent},
    {path: 'noticias/editar/:id', component: NoticiaFormComponent},
    {path: '', component: HomeComponent}
    
];
