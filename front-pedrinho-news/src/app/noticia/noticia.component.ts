import { Component } from '@angular/core';
import { NoticiaService } from '../service/noticia.service';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
export class NoticiaComponent {
  not$: any;

  constructor(private noticiaService: NoticiaService, private router: Router) {

  }
  
  ngOnInit(): void {
      this.getNoticia();
  }

  public async getNoticia() {
    this.not$ = await lastValueFrom(this.noticiaService.getNoticias());
  }
}
