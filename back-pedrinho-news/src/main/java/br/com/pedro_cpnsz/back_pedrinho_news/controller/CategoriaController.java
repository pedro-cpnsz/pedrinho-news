package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Categoria;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.CategoriaRepository;

@RestController
@RequestMapping(value = "categorias")

public class CategoriaController extends GenericController<Categoria, Integer> {

    @Autowired
    CategoriaRepository categoriaRepository;

    @RequestMapping(value = "listarPrincipais", method = RequestMethod.GET)
    public ResponseEntity<List<Categoria>> listarPrincipais(){
        return ResponseEntity.ok((List<Categoria>) categoriaRepository.findByPrincipal(true));
    }

}