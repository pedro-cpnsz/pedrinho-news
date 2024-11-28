import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenericService {

  protected http: HttpClient;

  constructor(handler: HttpBackend, protected url: String) {
    this.http = new HttpClient(handler);
  }

  public getAll() {
    return this.http.get(this.url + '/listar').pipe(map(response => response));
  }

  public getById(id: number) {
    return this.http.get(this.url + '/listar/' + id).pipe(map(response => response));
  }

}
