import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService extends GenericService {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/noticias";
    super(handler, url);
  }

}
