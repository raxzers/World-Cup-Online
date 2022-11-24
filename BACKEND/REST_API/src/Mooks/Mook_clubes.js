

async function get_clubes(){
    const response = [{ "Club": "Saprissa"},{ "Club": "Cartago"},{ "Club": "Heredia"},{ "Club": "Alajuela"}];
    return response
    
}

async function getById_clubes(id){
    var response = [];
    if(id== 0) {
        response = [{ "Club": "Saprissa"}];
    }
    return response
    
}

async function add_clubes(Club){
    return (200) 
}

async function remove_clubes(id){

    return (200) 
}

async function update_clubes(id,Club){

    return (200) 
}

module.exports = {
    get_clubes ,
    add_clubes,
    getById_clubes,
    remove_clubes,
    update_clubes,
} 