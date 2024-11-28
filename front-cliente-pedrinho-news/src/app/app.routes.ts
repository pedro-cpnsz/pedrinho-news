import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'noticias/categoria/:id', component: HomeComponent},
    {path: 'noticia/:id', component: NoticiaComponent}
];
