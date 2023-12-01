package com.example.parcial.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.parcial.Models.Datos;
import com.example.parcial.Models.Ramen;
import com.example.parcial.Services.DatosDB;

@RestController
public class Controllers {
    @GetMapping("/datos")
    public List<Datos> ObtenerParrafos(@RequestParam String id) {
      return new DatosDB().ObtenerParrafos(id);
    }
    @GetMapping("/ramen")
    public List<Ramen> ObtenerRamen(@RequestParam String id) {
      return new DatosDB().ObtenerRamen(id);
    }
}

