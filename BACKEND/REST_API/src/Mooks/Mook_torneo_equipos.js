async function get_torneo_equipos(){
    const response = [{"id":"1","Torneo":"PP","Equipo":"Saprissa"},{"id":"3","Torneo":"PP","Equipo":"Saprissa f"}];
    return response
    
    
}

async function getById_torneo_equipos(id){
    var response = [];
    if(id==1) {
        response = [{"id":"1","Torneo":"PP","Equipo":"Saprissa"}];
    }
    return response
    
}

async function add_torneo_equipos(Torneo,Equipo){

    return (200)
}

async function remove_torneo_equipos(id){

    return (200) 
}

async function remove_torneo_equipos_por_torneo(id){

    return (200) 
}

async function update_torneo_equipos(id,Torneo,Equipo){

    return (200) 
}

module.exports = {
    get_torneo_equipos ,
    add_torneo_equipos,
    getById_torneo_equipos,
    remove_torneo_equipos,
    update_torneo_equipos,
    remove_torneo_equipos_por_torneo,
} 