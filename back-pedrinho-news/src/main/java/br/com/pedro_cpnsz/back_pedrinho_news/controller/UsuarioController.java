package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Usuario;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.UsuarioRepository;

@RestController
@RequestMapping(value = "usuarios")

public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @RequestMapping(value = "listar")
    public ResponseEntity<List<Usuario>> listar() {
        return ResponseEntity.ok((List<Usuario>) usuarioRepository.findAll());
    }
}
