package com.example.parcial.Models;

public class Datos {
    private String foto;
    private String titulo;
    private String texto;
    
    public Datos(String titulo, String texto, String foto) {
        this.titulo = titulo;
        this.texto = texto;
        this.foto = foto;
    }
    public String getFoto() {
        return foto;
    }
    public void setFoto(String foto) {
        this.foto = foto;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }
}
