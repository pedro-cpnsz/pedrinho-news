package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Categoria;

@RestController
@RequestMapping(value = "categorias")

public class CategoriaController extends GenericController<Categoria, Integer> {

}
