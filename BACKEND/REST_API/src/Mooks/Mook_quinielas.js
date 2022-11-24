async function get_quinielas(){
    const response = [{
        "Id": "3",
        "id_Usuario": "9",
        "id_Partido": "9",
        "id_Jugadores_goles_Eq1": [
          "8",
          "9",
          "10"
        ],
        "id_Jugadores_asistencias_Eq1": [
          "6",
          "7"
        ],
        "id_Jugador_GOAT": "3",
        "Goles_Eq1": 3,
        "Goles_Eq2": 2,
        "id_Jugadores_goles_Eq2": [
          "3",
          "3"
        ],
        "id_Jugadores_asistencias_Eq2": [
          "1",
          "2"
        ],
        "Autogoles_eq1": 0,
        "Autogoles_eq2": 0
      },
      {
        "Id": "26",
        "id_Usuario": "9",
        "id_Partido": "9",
        "id_Jugadores_goles_Eq1": [
          "8",
          "9"
        ],
        "id_Jugadores_asistencias_Eq1": [
          "6",
          "7"
        ],
        "id_Jugador_GOAT": "3",
        "Goles_Eq1": 2,
        "Goles_Eq2": 2,
        "id_Jugadores_goles_Eq2": [
          "3",
          "3"
        ],
        "id_Jugadores_asistencias_Eq2": [
          "1",
          "2"
        ],
        "Autogoles_eq1": 0,
        "Autogoles_eq2": 0
      }];
    return response
    
}

async function getById_quinielas(id){
    var response = [];
    if(id==3) {
        response = [{
            "Id": "3",
            "id_Usuario": "9",
            "id_Partido": "9",
            "id_Jugadores_goles_Eq1": [
              "8",
              "9",
              "10"
            ],
            "id_Jugadores_asistencias_Eq1": [
              "6",
              "7"
            ],
            "id_Jugador_GOAT": "3",
            "Goles_Eq1": 3,
            "Goles_Eq2": 2,
            "id_Jugadores_goles_Eq2": [
              "3",
              "3"
            ],
            "id_Jugadores_asistencias_Eq2": [
              "1",
              "2"
            ],
            "Autogoles_eq1": 0,
            "Autogoles_eq2": 0
          }];
    }
    return response
}

async function getBytorneo_quinielas(torneo){
    var response = [];
    if(torneo=="Libertadores") {
        response = [{
            "Id": "3",
            "id_Usuario": "9",
            "id_Partido": "9",
            "id_Jugadores_goles_Eq1": [
              "8",
              "9",
              "10"
            ],
            "id_Jugadores_asistencias_Eq1": [
              "6",
              "7"
            ],
            "id_Jugador_GOAT": "3",
            "Goles_Eq1": 3,
            "Goles_Eq2": 2,
            "id_Jugadores_goles_Eq2": [
              "3",
              "3"
            ],
            "id_Jugadores_asistencias_Eq2": [
              "1",
              "2"
            ],
            "Autogoles_eq1": 0,
            "Autogoles_eq2": 0
          }];
    }
    return response
    
}

async function add_quinielas(id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    return (200) 
}

async function remove_quinielas(id){

    return (200)  
}

async function removeByTorneo_quinielas(Torneo){

    return (200) 
}

async function update_quinielas(id,id_Usuario,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    return (200) 
}

module.exports = {
    get_quinielas ,
    add_quinielas,
    getById_quinielas,
    getBytorneo_quinielas,
    remove_quinielas,
    update_quinielas,
    removeByTorneo_quinielas,
} 