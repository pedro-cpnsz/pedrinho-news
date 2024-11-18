import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { CategoriaService } from '../service/categoria.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    NgFor,
    RouterModule
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {

  cat$: any;

  constructor(private categoriaService: CategoriaService, private router: Router) {

  }
  
  ngOnInit(): void {
      this.getCategoria();
  }

  public async getCategoria() {
    this.cat$ = await lastValueFrom(this.categoriaService.getAll());
  }

  public update(id: number){
    this.router.navigate(['categorias/editar/', id]);
    console.log(id);
  }

  public async delete(id: number){
    let ret = await lastValueFrom(this.categoriaService.delete(id));
    this.cat$ = await lastValueFrom(this.categoriaService.getAll());
  }

}
