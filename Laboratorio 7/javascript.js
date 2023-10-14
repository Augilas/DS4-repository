//1.1
function colorRojo() {
  var rojo = document.getElementById("rojo");
  rojo.style.color = "red";
}

//1.2
//SIN API
/*
function parrYafo() {
  var parrafo = document.getElementById("parrafo");
  parrafo.innerHTML += getDatos(2);
} */
//CON API
function parrYafo() {
  var parrafo = document.getElementById("parrafo");
  getDatos(2).then(data => {
    parrafo.innerHTML += data;
  });
}

//1.3
function concaOtena() {
  var concatena = document.getElementById("concatena");
  var textoboxo = document.getElementById("concatena2");
  concatena.textContent = concatena.textContent.concat(textoboxo.value);
}

//1.4
function deletea() {
  var lista = document.getElementById("lista");
  var caja = document.getElementById("caja");
  for (var i = 0; i < lista.options.length; i++) {
    var opcion = lista.options[i];
    if (opcion.value === caja.value) {
      lista.remove(i);
      break;
    }
  }
}

//1.5
function vidYou() {
  var youtube = document.getElementById("youtube");
  if (youtube.disabled) {
    youtube.disabled = false;
    youtube.addEventListener("click", function () {
      window.location.href = "https://www.youtube.com/watch?v=e2qY8JtjJag&";
    });
  } else {
    youtube.disabled = true;
  }
}

//1.6
function alerta() {
  var textoboxo = document.getElementById("concatena2");
  alert(textoboxo.value);
}

//1.7
function mandarAconsola() {
    var textoboxo = document.getElementById("concatena2");
    if (textoboxo && textoboxo.value.trim() !== "") {
        console.log(textoboxo.value);
    } else {
        console.log("Campo vacio o indefinido");
    }
}

//1.8
function imprimirCheck() {
    var confirmar = document.getElementById ("gancho");
    var estado = confirmar.checked ? "marcado" : "desmarcado";
    alert(estado);
}
//1.9
function imprimirRadio() {
    var confirmar = document.getElementById ("radio");
    var estado = confirmar.checked ? "marcado" : "desmarcado";
    alert(estado);
    if (confirmar.checked) confirmar.checked = false;
    
}
//1.10
function validacion() {
    var campotecla = document.getElementById("campotecla");
    const patron = /^[A-Za-z!@#$%^&*()\-\_+=\[\]{\}\|;:'",.<>?\/\\ ]+$/;
    var mensaje = patron.test(campotecla.value) ? campotecla.value : "Solo se admiten teclas, no numeros";
    alert (mensaje);
}
//API
function getDatos(llama) {
  return fetch("https://api.jikan.moe/v4/characters/19492")
    .then(res => {
      if (res.ok) {
        return res.json().then(persona => {
          if (llama === 1) {
            mapDatos(persona.data);
          } else {
            return persona.data.about;
          }
        });
      } else {
        throw new Error("Error al conectar a la API");
      }
    });
}

function mapDatos(persona) {
  var texto = document.getElementById("rojo");
  texto.innerHTML = persona.name;

  var lista = document.getElementById("lista");
  persona.nicknames.forEach(p => {
    lista.innerHTML += mapDatos2(p);
  });
}

function mapDatos2(p) {
  return `<option value="${p}">${p}</option>`;
}