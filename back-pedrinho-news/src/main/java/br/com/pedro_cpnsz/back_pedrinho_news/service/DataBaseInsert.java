package br.com.pedro_cpnsz.back_pedrinho_news.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Categoria;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Comentario;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Noticia;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Usuario;
import br.com.pedro_cpnsz.back_pedrinho_news.model.Usuario.Tipo;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.CategoriaRepository;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.ComentarioRepository;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.NoticiaRepository;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.UsuarioRepository;

@Component
public class DataBaseInsert implements CommandLineRunner {

    @Autowired
    CategoriaRepository categoriaRepository;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    NoticiaRepository noticiaRepository;
    @Autowired
    ComentarioRepository comentarioRepository;

    @Override
    public void run(String... args) throws Exception {
        
        Categoria c1 = new Categoria("Política", null);
        categoriaRepository.save(c1);
        Categoria c2 = new Categoria("Esportes", null);
        categoriaRepository.save(c2);
        Categoria c3 = new Categoria("Futebol", c2);
        categoriaRepository.save(c3);

        Usuario u1 = new Usuario("Pedro", "pedro@email.com", "123123", Tipo.admin);
        usuarioRepository.save(u1);
        Usuario u2 = new Usuario("Juquinha", "juquinha@email.com", "123123", Tipo.autor);
        usuarioRepository.save(u2);

        Noticia n1 = new Noticia("Primeira notícia teste", "Uma grande descrição para testar.", u2, c2);
        noticiaRepository.save(n1);
        Noticia n2 = new Noticia("Segunda notícia teste", "Uma grande descrição para testar.", u2, c1);
        noticiaRepository.save(n2);

        Comentario com1 = new Comentario(n1, "Pedro", "pedro@email.com", "Comentário para testar");
        comentarioRepository.save(com1);

    }

}
