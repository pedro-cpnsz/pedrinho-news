import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Usuario } from '../../model/usuario.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit {

  usu$: any;
  usuario: any;
  private activateRoute = inject(ActivatedRoute);
  id: any;

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    nome: new FormControl<string>(''),
    email: new FormControl<string>(''),
    senha: new FormControl<string>(''),
    tipo: new FormControl<string>(''),
  });

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.getUsuarios();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getUsuarioById();
    }
  }

  public async getUsuarios() {
    this.usu$ = await lastValueFrom(this.usuarioService.getAll());
  }

  public async getUsuarioById() {
    this.usuario = await lastValueFrom(this.usuarioService.getById(this.id));
    console.log(this.usuario);
    this.form.controls.id.setValue(this.usuario.id);
    this.form.controls.nome.setValue(this.usuario.nome);
    this.form.controls.email.setValue(this.usuario.email);
    this.form.controls.senha.setValue(this.usuario.senha);
    this.form.controls.tipo.setValue(this.usuario.tipo);
  }

  public salvar() {
    let id_ = null;
    if (this.id) {
      id_ = this.id;
    }
    let nome = this.form.controls.nome.value;
    let email = this.form.controls.email.value;
    let senha = this.form.controls.senha.value;
    let tipo = this.form.controls.tipo.value;
    let usuario: Usuario;

    usuario = {
      "id": id_,
      "nome": nome,
      "email": email,
      "senha": senha,
      "tipo": tipo
    };
    
    console.log(usuario);

    this.usuarioService.save(usuario).subscribe(
      usuario => {
        this.router.navigate(['usuarios']);
        console.log(usuario);
      },
      erro => {
        console.log(erro);
      }
    );
  }

}