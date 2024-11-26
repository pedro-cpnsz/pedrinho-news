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

        Categoria c1 = new Categoria("Mundo", null);
        categoriaRepository.save(c1);
        Categoria c2 = new Categoria("Brasil", null);
        categoriaRepository.save(c2);
        Categoria c3 = new Categoria("Economia", null);
        categoriaRepository.save(c3);
        Categoria c4 = new Categoria("Tecnologia", null);
        categoriaRepository.save(c4);
        Categoria c5 = new Categoria("Esportes", null);
        categoriaRepository.save(c5);
        Categoria c6 = new Categoria("Negócios", null);
        categoriaRepository.save(c6);
        Categoria c7 = new Categoria("Política", null);
        categoriaRepository.save(c7);
        Categoria c8 = new Categoria("Música", null);
        categoriaRepository.save(c8);
        Categoria c9 = new Categoria("Ciência", null);
        categoriaRepository.save(c9);
        Categoria c10 = new Categoria("Saúde", null);
        categoriaRepository.save(c10);
        Categoria c11 = new Categoria("Moda", null);
        categoriaRepository.save(c11);
        Categoria c12 = new Categoria("Cultura", null);
        categoriaRepository.save(c12);
        Categoria c13 = new Categoria("Futebol", c5);
        categoriaRepository.save(c13);
        Categoria c14 = new Categoria("Criptomoedas", c3);
        categoriaRepository.save(c14);
        Categoria c15 = new Categoria("Rock", c8);
        categoriaRepository.save(c15);

        Usuario u1 = new Usuario("Pedro", "pedro@email.com", "123123", Tipo.admin);
        usuarioRepository.save(u1);
        Usuario u2 = new Usuario("Juquinha", "juquinha@email.com", "123123", Tipo.autor);
        usuarioRepository.save(u2);
        Usuario u3 = new Usuario("Guilherme", "guilherme@email.com", "321321", Tipo.autor);
        usuarioRepository.save(u3);
        Usuario u4 = new Usuario("Roberta", "roberta@email.com", "321321", Tipo.autor);
        usuarioRepository.save(u4);
        Usuario u5 = new Usuario("Maicon", "maicon@email.com", "321321", Tipo.autor);
        usuarioRepository.save(u5);

        Noticia n1 = new Noticia("Avanços na exploração espacial", "A NASA anuncia uma nova missão para explorar Marte em 2026.", u1, c1);
        noticiaRepository.save(n1);
        Noticia n2 = new Noticia("Novo marco na educação brasileira", "O governo aprova uma nova lei que revoluciona o ensino médio.", u2, c2);
        noticiaRepository.save(n2);
        Noticia n3 = new Noticia("Inflação desacelera no Brasil", "Indicadores mostram que a inflação caiu pelo segundo mês consecutivo.", u3, c3);
        noticiaRepository.save(n3);
        Noticia n4 = new Noticia("Lançamento do novo smartphone", "A fabricante X apresentou um modelo inovador com tela dobrável.", u4, c4);
        noticiaRepository.save(n4);
        Noticia n5 = new Noticia("Copa do Mundo: Brasil vence mais uma", "A seleção brasileira derrota a Argentina em um jogo emocionante.", u5, c5);
        noticiaRepository.save(n5);
        Noticia n6 = new Noticia("Empresas investem em startups", "Grandes corporações estão apostando em novas ideias de tecnologia.", u1, c6);
        noticiaRepository.save(n6);
        Noticia n7 = new Noticia("Novo debate na Câmara dos Deputados", "Parlamentares discutem projetos sobre mudanças climáticas.", u2, c7);
        noticiaRepository.save(n7);
        Noticia n8 = new Noticia("Álbum surpresa de banda famosa", "A banda de rock Y lança um álbum sem anúncios prévios.", u3, c8);
        noticiaRepository.save(n8);
        Noticia n9 = new Noticia("Avanço na cura do câncer", "Pesquisadores anunciam resultados promissores em testes clínicos.", u4, c9);
        noticiaRepository.save(n9);
        Noticia n10 = new Noticia("Nova vacina contra gripe", "Autoridades aprovam um imunizante mais eficaz contra variações do vírus.", u5, c10);
        noticiaRepository.save(n10);
        Noticia n11 = new Noticia("Semana da moda agita Paris", "Grandes marcas apresentam suas coleções para o próximo verão.", u1, c11);
        noticiaRepository.save(n11);
        Noticia n12 = new Noticia("Exposição histórica em museu", "Museu Z exibe obras raras de grandes artistas renascentistas.", u2, c12);
        noticiaRepository.save(n12);
        Noticia n13 = new Noticia("Brasileirão: rodada decisiva", "Times lutam por vaga na Libertadores em uma rodada emocionante.", u3, c13);
        noticiaRepository.save(n13);
        Noticia n14 = new Noticia("Bitcoin atinge novo recorde", "A criptomoeda ultrapassa a marca de 70 mil dólares pela primeira vez.", u4, c14);
        noticiaRepository.save(n14);
        Noticia n15 = new Noticia("Show de rock atrai multidões", "O festival X recebe grandes nomes do rock internacional.", u5, c15);
        noticiaRepository.save(n15);
        Noticia n16 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c1);
        noticiaRepository.save(n16);
        Noticia n17 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c2);
        noticiaRepository.save(n17);
        Noticia n18 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c3);
        noticiaRepository.save(n18);
        Noticia n19 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c4);
        noticiaRepository.save(n19);
        Noticia n20 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c5);
        noticiaRepository.save(n20);
        Noticia n21 = new Noticia("Notícia teste", "Uma grande descrição para testar.", u2, c6);
        noticiaRepository.save(n21);

        Comentario com1 = new Comentario(n1, "Pedro", "pedro@email.com", "Comentário para testar");
        comentarioRepository.save(com1);

    }

}
