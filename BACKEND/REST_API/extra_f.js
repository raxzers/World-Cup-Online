const pool = require("./database");
const funciones = require("./src/Funtion_queries/Funtion_queries_partidos");


function cadenaAleatoria() { 
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < 6; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};


// get crypto module
const crypto = require("crypto");
function encriptar(pass,s_key) { 
    const skey = "elihvg561houjtDDDgjean";
    const sha256Hasher = crypto.createHmac("sha256", s_key);
    const hash = sha256Hasher.update(pass).digest("hex");
        return hash;
};


async function Comparar_fechas_partido(Fecha,Fecha_inicio,Fecha_fin){
  const now1 = funciones.get_fecha_now();
  var fecha_inicio = new Date(Fecha_inicio);
  var fecha_fin = new Date(Fecha_fin);
  var fecha_partido = new Date(Fecha);
  var fecha_now = new Date(now1.rows[0].now);
  if (fecha_inicio < fecha_partido && fecha_partido < fecha_fin) {
    
    if (fecha_now < fecha_partido) {
        return ("si")
    }

    else { return ("Fecha del partido es menor a la actual") }

  }
  else {
      return ("Fecha del partido  no esta entre el rango del torneo")
  }
  
}

function filterAlpha (str) {
    if (typeof str !== "string") return false;
    return str.replace(/[A-Z]|[a-z]|[&\/\\#,+()$~%.'":*?<>{}]|[ ]/g, "") === "";
  }

  function validacion_correo_formato (str) {
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(str)) {
      return true;
    } else {
      return false;
    }
}

function Algoritmo_Puntos(id_partido) { 
  const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let aleatoria = "";
  for (let i = 0; i < 6; i++) {
      aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  return aleatoria;
};

module.exports = {
    cadenaAleatoria , 
    filterAlpha,
    encriptar,
    Comparar_fechas_partido,
    validacion_correo_formato,
}