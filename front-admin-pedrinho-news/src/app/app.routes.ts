import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiaFormComponent } from './noticia/noticia-form/noticia-form.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

export const routes: Routes = [
    {path: 'categoria', component: CategoriaComponent},
    {path: 'categoria/novo', component: CategoriaFormComponent},
    {path: 'categoria/editar/:id', component: CategoriaFormComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'usuario/novo', component: UsuarioFormComponent},
    {path: 'usuario/editar/:id', component: UsuarioFormComponent},
    {path: 'noticia', component: NoticiaComponent},
    {path: 'noticia/novo', component: NoticiaFormComponent},
    {path: 'noticia/editar/:id', component: NoticiaFormComponent},
    {path: '', component: HomeComponent}
    
];
