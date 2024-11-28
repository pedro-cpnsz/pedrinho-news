import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService extends GenericService {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/categorias";
    super(handler, url);
  }

  public getPrincipais(){
    return this.http.get('http://localhost:8080/categorias/listarPrincipais').pipe(map(response=>response));    
  }

}
