let baseUrl = "http://localhost:8080";
let productos = [];

function ObtenerSeccion() {
    let titulo
    let parrafo
    let texto
    let img
    let ramenimg
    let ramen
    for (let i = 1; i <= 13; i++) {
        fetch(baseUrl + '/datos?id=' + i)
            .then(res => res.json())
            .then(json => {
                if (i == 1) {
                    menu(json)
                } else if (i == 2) {
                    titulo = document.getElementById('titulo1')
                    parrafo = document.getElementById('parrafo1')
                    img = document.getElementById('img3')
                    img.src = json[0]['foto']
                    texto = document.createTextNode(json[0]['titulo'])
                    titulo.appendChild(texto);
                    texto = document.createTextNode(json[0]['texto'])
                    parrafo.appendChild(texto)
                } else if (i == 3) {
                    titulo = document.getElementById('sub1');
                    parrafo = document.getElementById('parrafo2')
                    img = document.getElementById('img4')
                    img.src = json[0]['foto']
                    texto = document.createTextNode(json[0]['titulo'])
                    titulo.appendChild(texto);
                    texto = document.createTextNode(json[0]['texto'])
                    parrafo.appendChild(texto)
                } else if (i == 4) {
                    for (let i = 0; i < Object.keys(json).length; i++) {
                        if (i == 0) {
                            titulo = document.getElementById('titulo2')
                            parrafo = document.getElementById('parrafo3')
                            texto = document.createTextNode(json[i]['titulo'])
                            titulo.appendChild(texto);
                            texto = document.createTextNode(json[i]['texto'])
                            parrafo.appendChild(texto)
                        } else if (i == 1) {
                            parrafo = document.getElementById('parrafo4')
                            texto = document.createTextNode(json[i]['texto'])
                            parrafo.appendChild(texto)
                        } else if (i == 2) {
                            titulo = document.getElementById('titulo3')
                            parrafo = document.getElementById('sub2')
                            texto = document.createTextNode(json[i]['titulo'])
                            titulo.appendChild(texto);
                            texto = document.createTextNode(json[i]['texto'])
                            parrafo.appendChild(texto)
                        } else {
                            titulo = document.getElementById('titulo4')
                            parrafo = document.getElementById('sub3')
                            texto = document.createTextNode(json[i]['titulo'])
                            titulo.appendChild(texto);
                            texto = document.createTextNode(json[i]['texto'])
                            parrafo.appendChild(texto)
                        }
                    }
                } else if (i == 5) {
                    Object.keys(json).forEach(function (key) {
                        if (key == 0) {
                            titulo = document.getElementById('titulo5')
                            parrafo = document.getElementById('parrafo5')
                            texto = document.createTextNode(json[key]['titulo'])
                            titulo.appendChild(texto);
                            texto = document.createTextNode(json[key]['texto'])
                            parrafo.appendChild(texto)
                        } else {
                            ramenimg = document.getElementById('ramenimg' + key)
                            ramen = document.getElementById('ramen' + key)
                            texto = document.createTextNode(json[key]['titulo'])
                            ramen.appendChild(texto)
                            ramenimg.src = json[key]['foto']
                        }
                    });
                } else if (i == 6) {
                    Object.keys(json).forEach(function (key) {
                        if (key == 0) {
                            titulo = document.getElementById('titlecarac')
                            texto = document.createTextNode(json[key]['titulo'])
                            titulo.appendChild(texto);
                        } else {
                            titulo = document.getElementById('carac' + key)
                            texto = document.createTextNode(json[key]['texto'])
                            titulo.appendChild(texto);
                        }
                    });
                } else if (i == 7) {
                    titulo = document.getElementById('resenastitle')
                    parrafo = document.getElementById('resenaparrafo')
                    img = document.getElementById('resenasimg')
                    img.src = json[0]['foto']
                    texto = document.createTextNode(json[0]['titulo'])
                    titulo.appendChild(texto);
                    texto = document.createTextNode(json[0]['texto'])
                    parrafo.appendChild(texto)
                } else if (i == 8) {
                    img = document.getElementById('raamen1')
                    img.src = json[0]['foto']
                } else if (i == 9) {
                    Object.keys(json).forEach(function (key) {
                        if (key == 0) {
                            titulo = document.getElementById('teamtitle')
                            texto = document.createTextNode(json[key]['titulo'])
                            titulo.appendChild(texto);
                            titulo = document.getElementById('team')
                            texto = document.createTextNode(json[key]['texto'])
                            titulo.appendChild(texto);
                        } else {
                            titulo = document.getElementById('team' + key)
                            texto = document.createTextNode(json[key]['texto'])
                            titulo.appendChild(texto);
                        }
                    });
                } else if (i == 10) {
                    Object.keys(json).forEach(function (key) {
                        if (key == 0) {
                            titulo = document.getElementById('partnertitle')
                            texto = document.createTextNode(json[key]['titulo'])
                            titulo.appendChild(texto);
                            img = document.getElementById('partner')
                            img.src = json[key]['foto']
                        } else {
                            img = document.getElementById('partner' + key)
                            img.src = json[key]['foto']
                        }
                    });
                } else if (i == 11) {
                    titulo = document.getElementById('parrafo6')
                    texto = document.createTextNode(json[0]['texto'])
                    titulo.appendChild(texto);
                } else if (i == 12) {
                    titulo = document.getElementById('parrafo7')
                    texto = document.createTextNode(json[0]['texto'])
                    titulo.appendChild(texto);
                } else {
                    img = document.getElementById('raamen2')
                    img.src = json[0]['foto']
                }
            });
    }
}

function menu(json) {
    let menu = document.getElementById('menu');
    Object.keys(json).forEach(function (key) {
        let value = json[key]['foto'];
        let obj = document.createElement('img');
        obj.src = value;
        obj.classList.add('icono');
        menu.appendChild(obj);
    });
}

function ramenMenu() {
    let oferta 
    let obj
    let value 
    for (let i = 8; i <= 13; i=i+5) {
        fetch(baseUrl + '/ramen?id=' + i)
            .then(res => res.json())
            .then(json => {
                if (i == 8) {
                    oferta = document.getElementById('oferta1');
                    Object.keys(json).forEach(function (key) {
                        value = json[key]['informacion'];
                        obj = document.createElement('h5');
                        obj.appendChild(document.createTextNode(json[key]['informacion']));
                        oferta.appendChild(obj);
                    });                    
                } else {
                    oferta = document.getElementById('oferta2');
                    Object.keys(json).forEach(function (key) {
                        value = json[key]['informacion'];
                        obj = document.createElement('h5');
                        obj.appendChild(document.createTextNode(json[key]['informacion']));
                        oferta.appendChild(obj);
                    });     
                }
            });
    }
}

function start() {
    ObtenerSeccion()
    ramenMenu()
}





