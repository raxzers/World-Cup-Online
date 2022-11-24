async function get_selecciones(){
    const response = [{
        "ID": "1",
        "Seleccion": "Francia"
      },
      {
        "ID": "2",
        "Seleccion": "Argentina"
      }];
    return response
    
}

async function getById_selecciones(id){
    var response = [];
    if(id==1) {
        response = [{
            "ID": "1",
            "Seleccion": "Francia"
          }];
    }
    return response
    
}

async function add_selecciones(Seleccion){

    return (200)
}

async function remove_selecciones(id){

    return (200)
}

async function update_selecciones(id,Seleccion){
    return (200) 
}

module.exports = {
    get_selecciones ,
    add_selecciones,
    getById_selecciones,
    remove_selecciones,
    update_selecciones,
}