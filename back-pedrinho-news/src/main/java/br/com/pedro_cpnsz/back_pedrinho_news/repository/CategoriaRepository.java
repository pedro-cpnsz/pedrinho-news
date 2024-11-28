package br.com.pedro_cpnsz.back_pedrinho_news.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Categoria;

public interface CategoriaRepository extends CrudRepository<Categoria, Integer> {

    List<Categoria> findByPrincipal(boolean principal);

}