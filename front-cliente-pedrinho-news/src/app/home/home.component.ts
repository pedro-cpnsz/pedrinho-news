import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../service/noticia.service';
import { lastValueFrom } from 'rxjs';
import { CategoriaService } from '../service/categoria.service';
import { Noticia } from '../model/noticia.model';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    DatePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  not$: any;
  noticia: any;
  cat$: any;
  id: any;

  constructor(private noticiaService: NoticiaService, private categoriaService: CategoriaService) {

  }

  ngOnInit(): void {
    this.getNoticias();
    this.getCategorias();
    console.log(this.not$)
  }

  public async getNoticias() {
    this.not$ = await lastValueFrom(this.noticiaService.getAll());
  }

  public async getCategorias() {
    this.cat$ = await lastValueFrom(this.categoriaService.getAll());
  }

  public async getNoticiaById() {
    this.noticia = await lastValueFrom(this.noticiaService.getById(this.id));
  }

}
