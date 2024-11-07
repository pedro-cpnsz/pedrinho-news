package br.com.pedro_cpnsz.back_pedrinho_news.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "noticias")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Noticia {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "conteudo")
    private String conteudo;

    @JoinColumn(name = "id_autor", referencedColumnName = "id")
    @ManyToOne
    private Usuario usuario;

    @JoinColumn(name = "id_categoria", referencedColumnName = "id")
    @ManyToOne
    private Categoria categoria;

    @Column(name = "data_publicacao")
    private Timestamp data_publicacao;

    public Noticia(String titulo, String conteudo, Usuario usuario, Categoria categoria, Timestamp data_publicacao) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.usuario = usuario;
        this.categoria = categoria;
        this.data_publicacao = data_publicacao;
    }
}
