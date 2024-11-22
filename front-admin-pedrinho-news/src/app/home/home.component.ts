import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { lastValueFrom } from 'rxjs';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  totalUsuarios: any;

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    this.totalUsuarios = await lastValueFrom(this.usuarioService.getAll()) as any[];
    
    this.totalUsuarios = this.totalUsuarios.length;
  }

}
