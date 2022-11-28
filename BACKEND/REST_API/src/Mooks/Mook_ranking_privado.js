async function get_ranking_privado(){
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

async function getById_ranking_privado(id){
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

async function getByclub_ranking_privado(Club){
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
async function add_ranking_privado(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_ranking_privado(id){

    return (200)  
}

async function update_ranking_privado(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_ranking_privado ,
    add_ranking_privado,
    getById_ranking_privado,
    remove_ranking_privado,
    update_ranking_privado,
    getByclub_ranking_privado,
} 