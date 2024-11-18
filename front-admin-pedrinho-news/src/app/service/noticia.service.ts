import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Noticia } from '../model/noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService extends GenericService<Noticia> {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/noticias";
    super(handler, url);
  }

}
