async function get_resultado(){
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

async function getById_resultado(id){
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

async function getByclub_resultado(Club){
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
async function add_resultado(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_resultado(id){

    return (200)  
}

async function update_resultado(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_resultado ,
    add_resultado,
    getById_resultado,
    remove_resultado,
    update_resultado,
    getByclub_resultado,
} 