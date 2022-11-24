async function get_partido(){
    const response = [{
        "ID": "3",
        "Fecha": "2022-10-31T06:00:00.000Z",
        "Hora": "10:10:00",
        "Nombre_Torneo": "Libertadores",
        "Fase": "Octavos",
        "Equipo_1": "Francia",
        "Goles_Equipo_1": 3,
        "Equipo_2": "Colombia",
        "Goles_Equipo_2": 2,
        "Sede": "Estadio Nacional",
        "Estado_del_partido": "Pendiente"
      },
      {
        "ID": "4",
        "Fecha": "2022-10-22T06:00:00.000Z",
        "Hora": "10:10:00",
        "Nombre_Torneo": "Libertadores",
        "Fase": "Octavos",
        "Equipo_1": "Francia",
        "Goles_Equipo_1": 0,
        "Equipo_2": "Colombia",
        "Goles_Equipo_2": 0,
        "Sede": "Estadio Nacional",
        "Estado_del_partido": "Pendiente"
      }];
    return response
    
}

async function get_fecha_now(){
    const response = await pool.query("select now()");
    return response.rows[0].now
    
}

async function getById_partido(id){
    var response = [];
    if(id==3) {
        response = [{
            "ID": "3",
            "Fecha": "2022-10-31T06:00:00.000Z",
            "Hora": "10:10:00",
            "Nombre_Torneo": "Libertadores",
            "Fase": "Octavos",
            "Equipo_1": "Francia",
            "Goles_Equipo_1": 3,
            "Equipo_2": "Colombia",
            "Goles_Equipo_2": 2,
            "Sede": "Estadio Nacional",
            "Estado_del_partido": "Pendiente"
          }];
    }
    return response
    
}

async function getByname_partido(Nombre_Torneo){
    var response = [];
    if(Nombre_Torneo=="Libertadores") {
        response = [{
            "ID": "3",
            "Fecha": "2022-10-31T06:00:00.000Z",
            "Hora": "10:10:00",
            "Nombre_Torneo": "Libertadores",
            "Fase": "Octavos",
            "Equipo_1": "Francia",
            "Goles_Equipo_1": 3,
            "Equipo_2": "Colombia",
            "Goles_Equipo_2": 2,
            "Sede": "Estadio Nacional",
            "Estado_del_partido": "Pendiente"
          },
          {
            "ID": "4",
            "Fecha": "2022-10-22T06:00:00.000Z",
            "Hora": "10:10:00",
            "Nombre_Torneo": "Libertadores",
            "Fase": "Octavos",
            "Equipo_1": "Francia",
            "Goles_Equipo_1": 0,
            "Equipo_2": "Colombia",
            "Goles_Equipo_2": 0,
            "Sede": "Estadio Nacional",
            "Estado_del_partido": "Pendiente"
          }];
    }
    return response
    
}

async function add_partido(Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido){

    return (200) 
}

async function remove_partido(id){

    return (200) 
}

async function removeBytorneo_partido(id){

    return (200) 
}

async function update_partido(id,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Goles_Equipo_1,Equipo_2,Goles_Equipo_2,Sede,Estado_del_partido){

    return (200) 
}

module.exports = {
    get_partido ,
    add_partido,
    getById_partido,
    getByname_partido,
    remove_partido,
    update_partido,
    get_fecha_now,
    removeBytorneo_partido,
} 