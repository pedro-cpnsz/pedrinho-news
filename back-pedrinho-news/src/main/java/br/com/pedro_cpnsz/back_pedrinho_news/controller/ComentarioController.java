package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Comentario;

@RestController
@RequestMapping(value = "comentarios")

public class ComentarioController extends GenericController<Comentario, Integer> {

}