package br.com.pedro_cpnsz.back_pedrinho_news.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.pedro_cpnsz.back_pedrinho_news.model.Usuario;
import br.com.pedro_cpnsz.back_pedrinho_news.repository.UsuarioRepository;

@RestController
@RequestMapping(value = "usuarios")

public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @RequestMapping(value = "listar", method = RequestMethod.GET)
    public ResponseEntity<List<Usuario>> getAll() {
        return ResponseEntity.ok((List<Usuario>) usuarioRepository.findAll());
    }

    @RequestMapping(value = "listar/{id}", method = RequestMethod.GET)
    public ResponseEntity<Usuario> getById(@PathVariable(value = "id") Integer id) {
        Optional<Usuario> object = usuarioRepository.findById(id);
        if (object.isPresent()) {
            return new ResponseEntity<Usuario>(object.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "novo", method = RequestMethod.POST)
    public ResponseEntity<Usuario> create(@RequestBody Usuario object) {
        return new ResponseEntity<Usuario>((Usuario) object, HttpStatus.OK);
    }

    @RequestMapping(value = "editar/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Usuario> update(@PathVariable(value = "id") Integer id, @RequestBody Usuario newObject) {
        Optional<Usuario> object = usuarioRepository.findById(id);
        if (object.isPresent()) {
            return new ResponseEntity<Usuario>((Usuario) usuarioRepository.save(newObject), HttpStatus.OK);
        } else {    
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "excluir/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Usuario> delete(@PathVariable(value = "id") Integer id) {
        Optional<Usuario> object = usuarioRepository.findById(id);
        if (object.isPresent()) {
            usuarioRepository.delete(object.get());
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
