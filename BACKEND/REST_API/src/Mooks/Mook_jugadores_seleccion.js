async function get_jugadores_seleccion(){
    const response = [
        {
          "ID": "1",
          "Seleccion": "Francia",
          "Nombre_Jugador": "Hugo",
          "Apellido1_Jugador": "Lloris",
          "Apellido2_Jugador": "  "
        },{
            "ID": "29",
            "Seleccion": "Argentina",
            "Nombre_Jugador": "Julian",
            "Apellido1_Jugador": "Alvarez",
            "Apellido2_Jugador": "  "
          }];
    return response
    
}

async function getById_jugadores_seleccion(id){
    var response = [];
    if(id==1) {
        response = [{
            "ID": "1",
            "Seleccion": "Francia",
            "Nombre_Jugador": "Hugo",
            "Apellido1_Jugador": "Lloris",
            "Apellido2_Jugador": "  "
          }];
    }
    return response
    
}

async function getByname_jugadores_seleccion(Seleccion){
    var response = [];
    if(Seleccion=="Francia") {
        response = [{
            "ID": "1",
            "Seleccion": "Francia",
            "Nombre_Jugador": "Hugo",
            "Apellido1_Jugador": "Lloris",
            "Apellido2_Jugador": "  "
          }];
    }
    return response
    
}

async function add_jugadores_seleccion(Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_jugadores_seleccion(id){

    return (200) 
}

async function update_jugadores_seleccion(id,Seleccion,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_jugadores_seleccion ,
    add_jugadores_seleccion,
    getById_jugadores_seleccion,
    remove_jugadores_seleccion,
    update_jugadores_seleccion,
    getByname_jugadores_seleccion,
} 