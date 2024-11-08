import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Noticia } from '../model/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  url: string = 'http://localhost:8080/noticias';

  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  public getNoticias() {
    return this.http.get(this.url + '/listar').pipe(map(response=>response));
  }

  public getNoticiaById(id: number) {
    return this.http.get(this.url + '/listar'+id).pipe(map(response=>response));
  }

  public salvar(noticia: Noticia) : Observable<Noticia> {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "Application/json");
    if (noticia.id !== null) {
      return this.http.put<Noticia>(this.url+`/editar/${noticia.id}`, noticia, {headers});  
    }
    return this.http.post<Noticia>(this.url+'/novo', noticia, {headers});
  }

  public remover(id: number) {
    return this.http.delete<Noticia>(this.url + '/excluir'+id).pipe(map(response=>response));
  }
}
