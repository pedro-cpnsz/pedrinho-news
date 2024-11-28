import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../service/noticia.service';
import { lastValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  private activateRoute = inject(ActivatedRoute);
  id: any;
  not: any;

  constructor(private noticiaService: NoticiaService) {

  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getNoticiaById();
  }

  public async getNoticiaById() {
    this.not = await lastValueFrom(this.noticiaService.getById(this.id));
  }

}
