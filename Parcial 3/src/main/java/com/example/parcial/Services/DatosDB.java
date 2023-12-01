package com.example.parcial.Services;

import com.example.parcial.Models.Datos;
import com.example.parcial.Models.Ramen;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DatosDB {
    Connection _cn;

    public DatosDB() {
        _cn = new Conexión().openDb();
    }

    public List<Datos> ObtenerParrafos(String id) {
        try {
            PreparedStatement stmt = _cn.prepareStatement("select * from datos where id_seccion = ?");
            stmt.setString(1, id);
            List<Datos> datos = new ArrayList<>();
            ResultSet result = stmt.executeQuery();
            while (result.next()) {
                Datos dato = new Datos(
                    result.getString("Titulo"),
                    result.getString("Texto"),
                    result.getString("imagen"));
                datos.add(dato);
              }
        
              result.close();
              stmt.close();
              return datos;
        } catch (Exception e) {
            System.err.println(e);
        }
        return null;
    }

        public List<Ramen> ObtenerRamen(String id) {
        try {
            PreparedStatement stmt = _cn.prepareStatement("select * from ramen where id_seccion = ?");
            stmt.setString(1, id);
            List<Ramen> ramens = new ArrayList<>();
            ResultSet result = stmt.executeQuery();
            while (result.next()) {
                Ramen ramen = new Ramen(
                    result.getString("informacion"));
                ramens.add(ramen);
              }
        
              result.close();
              stmt.close();
              return ramens;
        } catch (Exception e) {
            System.err.println(e);
        }
        return null;
    }
}
