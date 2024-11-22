import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { GenericService } from './generic.service';
import { HttpBackend } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<Usuario> {
  constructor(handler: HttpBackend) {
    let url = 'http://localhost:8080/usuarios';
    super(handler, url);
  }

  private totalUsuariosSubject = new BehaviorSubject<number>(0);

  totalUsuarios$ = this.totalUsuariosSubject.asObservable();

  setTotalUsuarios(total: number): void {
    this.totalUsuariosSubject.next(total);
  }
}
