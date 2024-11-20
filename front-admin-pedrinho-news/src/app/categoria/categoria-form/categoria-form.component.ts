import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Categoria } from '../../model/categoria.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent implements OnInit {

  cat$: any;
  categoria: any;
  private activateRoute = inject(ActivatedRoute);
  id: any;

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    nome: new FormControl<string>(''),
    categoria_pai: new FormControl<number|null>(null)
  });

  constructor(private categoriaService: CategoriaService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCategorias();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getCategoriaById();
    }
  }

  public async getCategorias() {
    this.cat$ = await lastValueFrom(this.categoriaService.getAll());
  }

  public async getCategoriaById() {
    this.categoria = await lastValueFrom(this.categoriaService.getById(this.id));
    console.log(this.categoria);
    this.form.controls.id.setValue(this.categoria.id);
    this.form.controls.nome.setValue(this.categoria.nome);
    this.form.controls.categoria_pai.setValue(this.categoria.categoria_pai?.id);
  }

  public salvar() {
    let id_ = null;
    if (this.id) {
      id_ = this.id;
    }
    let nome = this.form.controls.nome.value;
    let id_categoria_pai = this.form.controls.categoria_pai.value;
    console.log(id_categoria_pai);
    let categoria: Categoria;

    if (id_categoria_pai) {
      console.log('entrou if')
      categoria = {
        "id": id_,
        "nome": nome,
        "categoria_pai": {
          "id": id_categoria_pai,        
          "nome": null,
          "categoria_pai": null
        }
      };   
    } else {
      console.log('entrou else')
      categoria = {
        "id": id_,
        "nome": nome,
      };   
    }
   
    console.log(categoria);

    this.categoriaService.save(categoria).subscribe(
      categoria => {
        this.router.navigate(['categorias']);
        console.log(categoria);
      },
      erro => {
        console.log(erro);
      }
    );
  }

}