const pool = require("./database");

function cadenaAleatoria() { 
    const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let aleatoria = "";
    for (let i = 0; i < 6; i++) {
        aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
    }
    return aleatoria;
};
async function Calcular_puntos(id_partido) { 
  /trae la tabla resultado oficial/
  
  const res_resultados = await pool.query("SELECT * FROM public.\"Resultados\" WHERE \"id_Partido\" = $1",[id_partido]);
  const res_quiniela = await pool.query("SELECT * FROM public.\"Quinielas\" WHERE \"id_Partido\" = $1",[id_partido]);
  const res_partido = await pool.query("SELECT \"Nombre_Torneo\" FROM public.\"Partido\" WHERE \"ID\" = $1",[id_partido]);
  const res_torneo = await pool.query("SELECT \"ID\" FROM public.\"Torneo\" WHERE \"Nombre\" = $1",[res_partido.rows[0].Nombre_Torneo]);
  //console.log(res_resultados.rows);
  //console.log(res_quiniela.rows);
  //console.log(res_partido.rows);
  //console.log(res_torneo.rows);

          
  for (let i = 0; i < res_quiniela.rowCount; i++) {

    const res_usuario = await pool.query("SELECT * FROM public.\"Ranking\" WHERE \"id_Usuario\" = $1 AND \"id_Torneo\" = $2",[res_quiniela.rows[i].id_Usuario,res_torneo.rows[0].ID]);
    //console.log("entra for resultados");
    let puntos = res_usuario.rows[0].Puntaje;

    /*comparcion */
    if(res_quiniela.rows[i].Goles_Eq1===res_resultados.rows[0].Goles_Eq1){
      //console.log("entra if goles 1");
      puntos +=1;
    }
    if(res_quiniela.rows[i].Goles_Eq2===res_resultados.rows[0].Goles_Eq2){
      //console.log("entra if goles 2");
      puntos +=1;
    }
    if(res_quiniela.rows[i].id_Jugador_GOAT===res_resultados.rows[0].id_Jugador_GOAT){
      //console.log("entra if mvp");
      puntos +=1;

    }
    if(res_quiniela.rows[i].Autogoles_eq1===res_resultados.rows[0].Autogoles_eq1){
      //console.log("entra if autogoles1");
      puntos +=1;
    }
    if(res_quiniela.rows[i].Autogoles_eq2===res_resultados.rows[0].Autogoles_eq2){
      //console.log("entra if autogoles2");
      puntos +=1;
    }
    //comparar lista goleadores
    //console.log(puntos);
    //console.log("Cnt 1");
    if(res_quiniela.rows[i].id_Jugadores_goles_Eq1.length>0 && res_resultados.rows[0].id_Jugadores_goles_Eq1.length>0){
      //console.log("Cnt 2");
      for (let k = 0; k < res_resultados.rows[0].id_Jugadores_goles_Eq1.length; k++){
        //console.log("Cnt 3");
        for (let j = 0; j < res_quiniela.rows[i].id_Jugadores_goles_Eq1.length; j++){
          //console.log("Cnt 4");
          if(res_quiniela.rows[i].id_Jugadores_goles_Eq1[j]===res_resultados.rows[0].id_Jugadores_goles_Eq1[k]){
            puntos +=1;
            console.log("entra a puntos 5");
            break;
          }
        }
      }
    }
    //console.log("Cnt 6");
    if(res_quiniela.rows[i].id_Jugadores_goles_Eq2.length>0 && res_resultados.rows[0].id_Jugadores_goles_Eq2.length>0){
      //console.log("Cnt 7");
      for (let k = 0; k < res_resultados.rows[0].id_Jugadores_goles_Eq2.length; k++){
        //console.log("Cnt 8");
        for (let j = 0; j < res_quiniela.rows[i].id_Jugadores_goles_Eq2.length; j++){
          //console.log("Cnt 9");
          if(res_quiniela.rows[i].id_Jugadores_goles_Eq2[j]===res_resultados.rows[0].id_Jugadores_goles_Eq2[k]){
            puntos +=1;
            //console.log(puntos);
            console.log("entra a puntos 2");
            break;
          }
        }
      }
    }
    //console.log("Cnt 10");
    if(res_quiniela.rows[i].id_Jugadores_asistencias_Eq1.length>0 && res_resultados.rows[0].id_Jugadores_asistencias_Eq1.length>0 ){
      //console.log("Cnt 11");
      for (let k = 0; k < res_resultados.rows[0].id_Jugadores_asistencias_Eq1.length; k++){
        //console.log("Cnt 12");
        for (let j = 0; j < res_quiniela.rows[i].id_Jugadores_asistencias_Eq1.length; j++){
          //console.log("Cnt 13");
          if(res_quiniela.rows[i].id_Jugadores_asistencias_Eq1[j] === res_resultados.rows[0].id_Jugadores_asistencias_Eq1[k]){
            puntos +=1;
            //console.log(puntos);
            console.log("entra a puntos 3");
            break;
          }
        }
      }
    }
    //console.log("Cnt 14");
    if(res_quiniela.rows[i].id_Jugadores_asistencias_Eq2.length>0  && res_resultados.rows[0].id_Jugadores_asistencias_Eq2.length>0 ){
      //console.log("Cnt 15");
      for (let k = 0; k < res_resultados.rows[0].id_Jugadores_asistencias_Eq2.length; k++){
        //console.log("Cnt 16");
        for (let j = 0; j < res_quiniela.rows[i].id_Jugadores_asistencias_Eq2.length; j++){
          //console.log("Cnt 17");
          if(res_quiniela.rows[i].id_Jugadores_asistencias_Eq2[j]===res_resultados.rows[0].id_Jugadores_asistencias_Eq2[k]){
            puntos +=1;
            //console.log(puntos);
            console.log("entra a puntos 4");
            break;
          }
        }
      }
    }
    
    pool.query("UPDATE public.\"Ranking\" SET \"Puntaje\"= $1 WHERE \"id_Usuario\" = $2 AND \"id_Torneo\"= $3",[puntos,res_quiniela.rows[i].id_Usuario,res_torneo.rows[0].ID], (error, res1) => {
      if (error) console.log("ERROR");;
        /* actualizacion */
      console.log("datos");
      console.log(puntos);
      console.log(res_quiniela.rows[i].id_Usuario);
      console.log(res_torneo.rows[0].ID);
    });

  }
  
  
  return 201;
  
  /*ciclo para comparacion */
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
    Calcular_puntos,
    filterAlpha,
    encriptar,
    Comparar_fechas_torneo,
    validacion_correo_formato,
}