import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { NoticiaService } from '../service/noticia.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  not$: any;

  constructor(private noticiaService: NoticiaService, private router: Router) {

  }
  
  ngOnInit(): void {
      this.getNoticia();
  }

  public async getNoticia() {
    this.not$ = await lastValueFrom(this.noticiaService.getAll());
  }

  public update(id: number){
    this.router.navigate(['noticias/editar/', id]);
    console.log(id);
  }

  public async delete(id: number){
    let ret = await lastValueFrom(this.noticiaService.delete(id));
    this.not$ = await lastValueFrom(this.noticiaService.getAll());
  }

}
