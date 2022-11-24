const pool = require("../../database");
const queries = require('../Queries/queries_jugadores_club');

async function get_jugadores_club(){
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

async function getById_jugadores_club(id){
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

async function getByclub_jugadores_club(Club){
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
async function add_jugadores_club(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_jugadores_club(id){

    return (200)  
}

async function update_jugadores_club(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_jugadores_club ,
    add_jugadores_club,
    getById_jugadores_club,
    remove_jugadores_club,
    update_jugadores_club,
    getByclub_jugadores_club,
} 