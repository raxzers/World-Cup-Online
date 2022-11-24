async function get_torneo(){
    const response = [{
        "ID": "EiOASj",
        "Nombre": "Copa del Mundo",
        "Fecha_inicio": "2020-10-31T06:00:00.000Z",
        "Fecha_fin": "2020-12-31T06:00:00.000Z",
        "Equipos": "Seleccion",
        "Reglas": "fkwhfibjebvjdsbvs"
      },
      {
        "ID": "oDD1jI",
        "Nombre": "PP",
        "Fecha_inicio": "2020-10-31T06:00:00.000Z",
        "Fecha_fin": "2020-12-31T06:00:00.000Z",
        "Equipos": "Seleccion",
        "Reglas": "fkwhfibjebvjdsbvs"
      }];
    return response
    
}

async function getById_torneo(id){
    var response = [];
    if(id=="EiOASj") {
        response = [{
            "ID": "EiOASj",
            "Nombre": "Copa del Mundo",
            "Fecha_inicio": "2020-10-31T06:00:00.000Z",
            "Fecha_fin": "2020-12-31T06:00:00.000Z",
            "Equipos": "Seleccion",
            "Reglas": "fkwhfibjebvjdsbvs"
          }];
    }
    return response
    
}

async function getByname_torneo(Nombre){
    var response = [];
    if(Nombre=="Copa del Mundo") {
        response = [{
            "ID": "EiOASj",
            "Nombre": "Copa del Mundo",
            "Fecha_inicio": "2020-10-31T06:00:00.000Z",
            "Fecha_fin": "2020-12-31T06:00:00.000Z",
            "Equipos": "Seleccion",
            "Reglas": "fkwhfibjebvjdsbvs"
          }];
    }
    return response
    
}

async function add_torneo(ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas){

    return (200) 
}

async function remove_torneo(id){

    return (200)  
}

async function update_torneo(id,Fecha_inicio,Fecha_fin,Equipos,Reglas){

    return (200) 
}

module.exports = {
    get_torneo ,
    add_torneo,
    getById_torneo,
    remove_torneo,
    update_torneo,
    getByname_torneo,
} 