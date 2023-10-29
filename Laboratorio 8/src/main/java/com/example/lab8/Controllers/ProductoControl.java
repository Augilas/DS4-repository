package com.example.lab8.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.lab8.Models.Productos;
import com.example.lab8.Services.ProductosDB;

@RestController
public class ProductoControl {

    @GetMapping("/productos/all")
    public List<Productos> ObtenerTodosProductos() {
        return new ProductosDB().ObtenerProductos();
    }

    @PostMapping("/producto")
    public int InsertarProducto(@RequestBody Productos producto) {
        return new ProductosDB().GuardarProductos(producto);
    }

    @PutMapping("/producto")
    public int ActualizarProducto(@RequestBody Productos producto) {
        return new ProductosDB().ActualizarProductos(producto);
    }

    @DeleteMapping("/producto/{productoId}")
    public int Delete(@PathVariable("productoId") int pid) {
        return new ProductosDB().EliminarProducto(pid);
    }
}
