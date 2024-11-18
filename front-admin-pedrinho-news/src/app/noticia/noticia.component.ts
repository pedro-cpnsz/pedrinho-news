import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NoticiaService } from '../service/noticia.service';
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

  constructor(private noticiaService: NoticiaService) {

  }
  
  ngOnInit(): void {
      this.getNoticia();
  }

  public async getNoticia() {
    this.not$ = await lastValueFrom(this.noticiaService.getAll());
  }
}
