

async function get_comunidad_privada(){
    const response = [
        {
          "ID": "1",
          "Club": "Saprissa",
          "Nombre_Jugador": "Kevin",
          "Apellido1_Jugador": "Chamorro",
          "Apellido2_Jugador": "  "
        },
        {
          "ID": "2",
          "Club": "Saprissa",
          "Nombre_Jugador": "Aron",
          "Apellido1_Jugador": "Cruz",
          "Apellido2_Jugador": "  "
        },
        {
          "ID": "21",
          "Club": "Heredia",
          "Nombre_Jugador": "Esteban",
          "Apellido1_Jugador": "Alvarado",
          "Apellido2_Jugador": "  "
        }];
    return response
    
}

async function getById_comunidad_privada(id){
    var response = [];
    if(id==1) {
        response = [{
            "ID": "1",
            "Club": "Saprissa",
            "Nombre_Jugador": "Kevin",
            "Apellido1_Jugador": "Chamorro",
            "Apellido2_Jugador": "  "
          }];
    }
    return response
}

async function getByclub_comunidad_privada(Club){
    var response = [];
    if(Club=="Saprissa") {
        response = [
            {
              "ID": "1",
              "Club": "Saprissa",
              "Nombre_Jugador": "Kevin",
              "Apellido1_Jugador": "Chamorro",
              "Apellido2_Jugador": "  "
            },
            {
              "ID": "2",
              "Club": "Saprissa",
              "Nombre_Jugador": "Aron",
              "Apellido1_Jugador": "Cruz",
              "Apellido2_Jugador": "  "
            }];
    }
    return response
}
async function add_comunidad_privada(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_comunidad_privada(id){

    return (200)  
}

async function update_comunidad_privada(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_comunidad_privada ,
    add_comunidad_privada,
    getById_comunidad_privada,
    remove_comunidad_privada,
    update_comunidad_privada,
    getByclub_comunidad_privada,
} 