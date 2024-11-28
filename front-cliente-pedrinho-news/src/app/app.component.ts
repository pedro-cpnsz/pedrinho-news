import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoriaService } from './service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-cliente-pedrinho-news';

  categoria$: any;

  constructor(private categoriaService: CategoriaService, private router: Router){

  }

  ngOnInit(): void {    
    this.getCategorias();
  }
  
  public async getCategorias(){
    this.categoria$ = await lastValueFrom(this.categoriaService.getPrincipais());
  }

  public abrirCategoria(id: any){
    this.router.navigate(['noticias/', id]);
  }

}
