import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { lastValueFrom } from 'rxjs';
import { CategoriaService } from '../service/categoria.service';
import { NoticiaService } from '../service/noticia.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  totalUsuarios: any;
  totalNoticias: any;
  totalCategorias: any;

  constructor(private usuarioService: UsuarioService, private noticiaService: NoticiaService, private categoriaService: CategoriaService, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    this.totalUsuarios = await lastValueFrom(this.usuarioService.getAll()) as any[];
    this.totalUsuarios = this.totalUsuarios.length;

    this.totalNoticias = await lastValueFrom(this.noticiaService.getAll()) as any[];
    this.totalNoticias = this.totalNoticias.length;

    this.totalCategorias = await lastValueFrom(this.categoriaService.getAll()) as any[];
    this.totalCategorias = this.totalCategorias.length;
  }

}
