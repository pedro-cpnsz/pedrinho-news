import { Component, inject, OnInit } from '@angular/core';
import { NoticiaService } from '../../service/noticia.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Noticia } from '../../model/noticia.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { UsuarioService } from '../../service/usuario.service';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-noticia-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './noticia-form.component.html',
  styleUrl: './noticia-form.component.css'
})
export class NoticiaFormComponent implements OnInit {

  not$: any;
  noticia: any;
  usu$: any;
  cat$: any;
  private activateRoute = inject(ActivatedRoute);
  id: any;

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    titulo: new FormControl<string>(''),
    conteudo: new FormControl<string>(''),
    usuario: new FormControl<number|null>(null),
    categoria: new FormControl<number|null>(null)
  });

  constructor(private noticiaService: NoticiaService, private router: Router, private usuarioService: UsuarioService, private categoriaService: CategoriaService) {

  }

  ngOnInit(): void {
    this.getNoticias();
    this.getUsuarios();
    this.getCategorias();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getNoticiaById();
    }
  }

  public async getNoticias() {
    this.not$ = await lastValueFrom(this.noticiaService.getAll());
  }

  public async getUsuarios() {
    this.usu$ = await lastValueFrom(this.usuarioService.getAll());
  }

  public async getCategorias() {
    this.cat$ = await lastValueFrom(this.categoriaService.getAll());
  }

  public async getNoticiaById() {
    this.noticia = await lastValueFrom(this.noticiaService.getById(this.id));
    console.log(this.noticia);
    this.form.controls.id.setValue(this.noticia.id);
    this.form.controls.titulo.setValue(this.noticia.titulo);
    this.form.controls.conteudo.setValue(this.noticia.conteudo);
    this.form.controls.usuario.setValue(this.noticia.usuario.id);
    this.form.controls.categoria.setValue(this.noticia.categoria.id);
  }

  public salvar() {
    let id_ = null;
    if (this.id) {
      id_ = this.id;
    }
    let titulo = this.form.controls.titulo.value;
    let conteudo = this.form.controls.conteudo.value;
    let id_usuario = this.form.controls.usuario.value;
    let id_categoria = this.form.controls.categoria.value;
    console.log(id_usuario)
    console.log(id_categoria)
    let noticia: Noticia;

    if (id_categoria) {
      console.log('entrou if')
      noticia = {
        "id": id_,
        "titulo": titulo,
        "conteudo": conteudo,
        "usuario": {
          "id": id_usuario,
          "nome": null,
          "email": null,
          "senha": null,
          "tipo": null
        },
        "categoria": {
          "id": id_categoria,
          "nome": null,
          "principal": null,
          "categoria_pai": null
        }
      };   
    } else {
      console.log('entrou else')
      noticia = {
        "id": id_,
        "titulo": titulo,
        "conteudo": conteudo,
        "usuario": {
          "id": id_usuario,
          "nome": null,
          "email": null,
          "senha": null,
          "tipo": null
        }
      }
    }
    
    console.log(noticia);

    this.noticiaService.save(noticia).subscribe(
      noticia => {
        this.router.navigate(['noticias']);
        console.log(noticia);
      },
      erro => {
        console.log(erro);
      }
    );
  }

}