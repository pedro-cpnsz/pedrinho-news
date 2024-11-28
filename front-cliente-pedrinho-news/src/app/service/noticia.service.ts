import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService extends GenericService {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/noticias";
    super(handler, url);
  }

  public listarNoticiasPorCategoria(id_categoria: any){
    return this.http.get(this.url + '/listByCat/' + id_categoria).pipe(map(response => response));
  }

}
