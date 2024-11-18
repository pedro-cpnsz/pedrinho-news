import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService extends GenericService<Usuario> {

  constructor(handler: HttpBackend) {
    let url = "http://localhost:8080/usuario";
    super(handler, url);
  }

}
