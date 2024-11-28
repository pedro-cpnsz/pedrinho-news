import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../service/noticia.service';
import { lastValueFrom } from 'rxjs';
import { CategoriaService } from '../service/categoria.service';
import { DatePipe, NgFor } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    DatePipe,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  not$: any;
  noticia: any;
  cat$: any;
  id: any;

  constructor(private noticiaService: NoticiaService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getNoticias();
    });
  }

  public async getNoticias() {
    if(this.id){
      this.not$ = await lastValueFrom(this.noticiaService.listarNoticiasPorCategoria(this.id));
    }else{
      this.not$ = await lastValueFrom(this.noticiaService.getAll());
    }
  }

  public async getNoticiaById() {
    this.noticia = await lastValueFrom(this.noticiaService.getById(this.id));
  }

  public abrirNoticia(id: any) {

    this.router.navigate(['noticia/', id])

  }

}
