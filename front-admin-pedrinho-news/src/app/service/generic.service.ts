import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';

interface Identificador {
  id: number | null;
}

@Injectable({
  providedIn: 'root'
})

export class GenericService<T extends Identificador> {

  private http: HttpClient;

  constructor(handler: HttpBackend, protected url: String) {
    this.http = new HttpClient(handler);
  }

  public getAll() {
    return this.http.get(this.url + '/listar').pipe(map(response => response));
  }

  public getById(id: number) {
    return this.http.get(this.url + '/listar' + id).pipe(map(response => response));
  }

  public save(object: T): Observable<T> {
    const headers = new HttpHeaders();
    headers.set("Content-Type", "Application/json");

    if (object.id !== null) {
      return this.http.put<T>(this.url + `/editar/${object.id}`, object, { headers });
    }
    return this.http.put<T>(this.url + '/novo', object, { headers });
  }

  public delete(id: number) {
    return this.http.delete<T>(this.url + '/excluir/' + id).pipe(map(response => response));
  }
}
