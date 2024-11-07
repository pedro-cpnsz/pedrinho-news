package br.com.pedro_cpnsz.back_pedrinho_news.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor

public class Usuario {
    public enum Tipo {
        admin,
        autor
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

    @Column(name = "tipo")
    @Enumerated(EnumType.STRING)
    private Tipo tipo;

    @Column(name = "data_cadastro")
    private Timestamp data_cadastro;

    public Usuario(String nome, String email, String senha, Tipo tipo, Timestamp data_cadastro) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipo = tipo;
        this.data_cadastro = data_cadastro;
    }
}
