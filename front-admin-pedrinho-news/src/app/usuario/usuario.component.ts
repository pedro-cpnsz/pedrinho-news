import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  usu$: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsuario();
  }

  public async getUsuario() {
    this.usu$ = await lastValueFrom(this.usuarioService.getAll());
  }

}
