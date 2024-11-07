package br.com.pedro_cpnsz.back_pedrinho_news.model;

import java.time.LocalDateTime;

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

    @Column(name = "data_comentario")
    private LocalDateTime data_comentario;

}