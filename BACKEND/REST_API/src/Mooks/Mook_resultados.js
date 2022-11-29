async function get_resultado(){
    const response = [
        {
          "Id": "1",
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
        },
        {
          "Id": "2",
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

async function getById_resultado(id){
    var response = [];
    if(id==1) {
        response = [{
            "Id": "1",
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
    }
    return response
}

async function getByclub_resultado(Club){
    var response = [];
    if(Club=="Saprissa") {
        response = [
            {
                "Id": "1",
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
    }
    return response
}
async function add_resultado(id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

    return (200) 
}

async function remove_resultado(id){

    return (200)  
}

async function update_resultado(id,id_Partido,id_Jugadores_goles_Eq1,id_Jugadores_asistencias_Eq1,id_Jugadores_goles_Eq2,id_Jugadores_asistencias_Eq2,Goles_Eq1,Goles_Eq2,Autogoles_eq1,Autogoles_eq2,id_Jugador_GOAT){

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