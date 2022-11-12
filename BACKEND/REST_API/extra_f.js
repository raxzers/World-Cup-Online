const pool = require("./database");

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

function Comparar_fechas_torneo(Fecha_inicio,Fecha_fin){
    
    return pool.query("select now()", (error, results1) => {
        
        var fecha_inicio = new Date(Fecha_inicio);
        var fecha_fin = new Date(Fecha_fin);
        if (fecha_inicio < fecha_fin){
            
            if (results1.rows[0].now < fecha_inicio) valor= true;
            else valor= false;
        }
        else {
            valor= false;
            }
    });
    
};

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

module.exports = {
    cadenaAleatoria , 
    filterAlpha,
    encriptar,
    Comparar_fechas_torneo,
    validacion_correo_formato,
}