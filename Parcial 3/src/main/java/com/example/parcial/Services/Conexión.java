package com.example.parcial.Services;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class Conexión {
    public Connection openDb() {
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            return DriverManager.getConnection("jdbc:sqlserver://localhost:1433;encrypt=true;trustServerCertificate=true;databaseName=parcial3", "Test", "12345");
        } catch (SQLException e) {
            int x = 1;
        } catch (ClassNotFoundException cnfex) {
            int x = 1;
        }
        return null;
    }
}
