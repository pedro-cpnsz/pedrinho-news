package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Categoria;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Noticia;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.CategoriaRepository;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.NoticiaRepository;

@RestController
@RequestMapping(value = "noticias")
public class NoticiaController extends GenericController<Noticia, Integer> {

    @Autowired
    NoticiaRepository noticiaRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    @RequestMapping(value = "listByCat/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<Noticia>> listarNoticiasPorCategoria(@PathVariable(value = "id") Integer id) {
        Categoria categoria = categoriaRepository.findById(id).get();
        return ResponseEntity.ok((List<Noticia>) noticiaRepository.findByCategoria(categoria));
    }

}