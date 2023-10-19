//1.1
function colorRojo() {
  var rojo = document.getElementById("rojo");
  rojo.style.color = "red";
}

//1.2
//SIN API

function parrYafo() {
  var parrafo = document.getElementById("parrafo");
  parrafo.innerHTML += "Parrafo 2: Electric Boogaloo";
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
  var confirmar = document.getElementById("gancho");
  var estado = confirmar.checked ? "marcado" : "desmarcado";
  alert(estado);
}
//1.9
function imprimirRadio() {
  var confirmar = document.getElementById("radio");
  var estado = confirmar.checked ? "marcado" : "desmarcado";
  alert(estado);
  if (confirmar.checked) confirmar.checked = false;
}
//1.10
function validacion() {
  var campotecla = document.getElementById("campotecla");
  const patron = /^[A-Za-z!@#$%^&*()\-\_+=\[\]{\}\|;:'",.<>?\/\\ ]+$/;
  var mensaje = patron.test(campotecla.value)
    ? campotecla.value
    : "Solo se admiten teclas, no numeros";
  alert(mensaje);
}

//mapeo al api
async function getDatos() {
  var p1 = document.getElementById("personaje1").value;
  var p2 = document.getElementById("personaje2").value;
  var p3 = document.getElementById("personaje3").value;

  if (!p1 || !p2 || !p3) {
    alert("Ninguno de los campos puede estar vacío");
    return;
  }

  for (var i = 1; i <= 3; i++) {
    var vari1 = "imagenAnime" + i;
    var vari2 = "nombre" + i;
    var vari3 = "anime" + i;
    var imagenAnime = document.getElementById(vari1);
    var nombre = document.getElementById(vari2);
    var anime = document.getElementById(vari3);
    var url;

    switch (i) {
      case 1:
        url = "https://api.jikan.moe/v4/characters/" + p1 + "/full";
        break;
      case 2:
        url = "https://api.jikan.moe/v4/characters/" + p2 + "/full";
        break;
      case 3:
        url = "https://api.jikan.moe/v4/characters/" + p3 + "/full";
        break;
    }

    try {
      const response = await fetch(url);
     if (!response.ok) {
        throw new Error("La API no respondió :<");
      } 
      const data = await response.json();

      imagenAnime.src = data.data.images.jpg.image_url;
      nombre.value = data.data.name;
      anime.value = data.data.manga[0].manga.title;

    } catch (error) {
      console.error(error);
      imagenAnime.alt = "no se encontro :(";
      imagenAnime.src = "";
      nombre.value = "no se encontro :((";
      anime.value = "no se encontro :(((";
    }
  }
}