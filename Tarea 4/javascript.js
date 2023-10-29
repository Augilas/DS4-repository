function ojos() {
    let icono_ojo = document.getElementById("icono_ojo");
    let contrasena = document.getElementById("contrasena");

        if(contrasena.type == "password") {
            contrasena.type = "text";
            icono_ojo.src = "Images/ojo_abierto.png";
        } else {
            contrasena.type = "password";
            icono_ojo.src = "Images/ojo_cerrado.png";
        }
    }

    function loader() {
        let text = document.getElementById("text");
        let loadingGif = document.getElementById("loadingGif");
        let correo_correcto = document.getElementById("correo_correcto");
        let contrasena = document.getElementById("contrasena");
        let input_box = document.getElementById("input-box");
        let input_box2 = document.getElementById("input-box2");
        let icono_ojo = document.getElementById("icono_ojo");
        let mensaje = "";
        
        if (text.style.display !== "none") {
            text.style.display = "none";
            loadingGif.style.display = "inline-block";
    

            
            if(correo_correcto.value == "user@email.com" && contrasena.value == "1234") {
                input_box.style.backgroundColor = "#e5e5e5";
                input_box2.style.backgroundColor = "#e5e5e5";
                correo_correcto.style.backgroundColor = "#e5e5e5";
                contrasena.style.backgroundColor = "#e5e5e5";
                icono_ojo.style.backgroundColor = "#e5e5e5";
                text.textContent = "Logged In";
                mensaje = "Inicio de sesion exitoso"
            } else {
                input_box.style.backgroundColor = "#f76565";
                input_box2.style.backgroundColor = "#f76565";
                correo_correcto.style.backgroundColor = "#f76565";
                contrasena.style.backgroundColor = "#f76565";
                icono_ojo.style.backgroundColor = "#f76565";
                mensaje = "Correo o contrasena incorrecta"
            }
                        // Simulando carga
                        setTimeout(function () {
                            text.style.display = "inline-block";
                            loadingGif.style.display = "none";
                            alert(mensaje);
                        }, 2000);
        }
    }