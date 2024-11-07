package br.com.pedro_cpnsz.back_pedrinho_news.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Comentario;

public interface ComentarioRepository extends CrudRepository<Comentario, Integer> {

}
