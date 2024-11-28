package br.com.pedro_cpnsz.back_pedrinho_news.model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "comentarios")
@Data
@NoArgsConstructor

public class Comentario {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JoinColumn(name = "id_noticia", referencedColumnName = "id")
    @ManyToOne
    private Noticia noticia;

    @Column(name = "nome_usuario")
    private String nome_usuario;

    @Column(name = "email_usuario")
    private String email_usuario;

    @Column(name = "comentario")
    private String comentario;

    @CreationTimestamp
    @Column(name = "data_comentario", updatable = false)
    private Timestamp data_comentario;

    public Comentario(Noticia noticia, String nome_usuario, String email_usuario, String comentario) {
        this.noticia = noticia;
        this.nome_usuario = nome_usuario;
        this.email_usuario = email_usuario;
        this.comentario = comentario;
    }

}