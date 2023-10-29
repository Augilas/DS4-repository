package com.example.lab8.Models;

public class Productos {
    private int Id;
    private String nombre;
    private Float precio;
    private int categoriaId;
    private String foto;
    private String fechaCaducidad;
    private String fechaProduccion;
    //Constructor Producto
    public Productos(int id, String nombre, Float precio, int categoriaId, String foto, String fechaCaducidad,
            String fechaProduccion) {
        Id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoriaId = categoriaId;
        this.foto = foto;
        this.fechaCaducidad = fechaCaducidad;
        this.fechaProduccion = fechaProduccion;
    }
    //Metodos Set y Get
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Float getPrecio() {
        return precio;
    }
    public void setPrecio(Float precio) {
        this.precio = precio;
    }
    public int getCategoriaId() {
        return categoriaId;
    }
    public void setCategoriaId(int categoriaId) {
        this.categoriaId = categoriaId;
    }
    public String getFoto() {
        return foto;
    }
    public void setFoto(String foto) {
        this.foto = foto;
    }
    public String getFechaCaducidad() {
        return fechaCaducidad;
    }
    public void setFechaCaducidad(String fechaCaducidad) {
        this.fechaCaducidad = fechaCaducidad;
    }
    public String getFechaProduccion() {
        return fechaProduccion;
    }
    public void setFechaProduccion(String fechaProduccion) {
        this.fechaProduccion = fechaProduccion;
    }

}
