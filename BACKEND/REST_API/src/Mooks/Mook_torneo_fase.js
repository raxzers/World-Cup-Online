async function get_torneo_fase(){
    const response = [{"id":"2","Torneo":"Concacaf","Fase":"Semifinal"},{"id":"5","Torneo":"Copa Mo","Fase":"Final"}];
    return response
    
}

async function getById_torneo_fase(id){
    var response = [];
    if(id==2) {
        response = [{"id":"2","Torneo":"Concacaf","Fase":"Semifinal"}];
    }
    return response
    
}

async function add_torneo_fase(Torneo,Fase){

    return (200)  
}

async function remove_torneo_fase(id){

    return (200)  
}

async function remove_torneo_fase_por_troneo(id){

    return (200)  
}

async function update_torneo_fase(id,Torneo,Fase){

    return (200) 
}

module.exports = {
    get_torneo_fase ,
    add_torneo_fase,
    getById_torneo_fase,
    remove_torneo_fase,
    update_torneo_fase,
    remove_torneo_fase_por_troneo,
} 