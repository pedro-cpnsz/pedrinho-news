import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Categoria } from '../model/categoria.model';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService extends GenericService<Categoria> {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/categorias";
    super(handler, url);
  }

}
