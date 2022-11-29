async function get_ranking_privado(){
    const response = [
        {
          "Id_comunidad": "1",
          "Id_usuario": "1"
        },
        {
          "Id_comunidad": "1",
          "Id_usuario": "2"
        }];
    return response
    
}

async function getById_ranking_privado(id){
    var response = [];
    if(id==1) {
        response = [{
          "Id_comunidad": "1",
          "Id_usuario": "2"
          }];
    }
    return response
}

async function getBycomunidad_ranking_privado(comunidad){
    var response = [];
    if(comunidad==1) {
        response = [
          {
            "Id_comunidad": "1",
            "Id_usuario": "1"
          },
          {
            "Id_comunidad": "1",
            "Id_usuario": "2"
          }];
    }
    return response
}
async function add_ranking_privado(Usuario,COD_Invita){

    return (200) 
}

async function remove_ranking_privado(id){

    return (200)  
}

async function update_ranking_privado(Usuario,NombreComunidad,id){

    return (200) 
}

module.exports = {
    get_ranking_privado ,
    add_ranking_privado,
    getById_ranking_privado,
    remove_ranking_privado,
    update_ranking_privado,
    getBycomunidad_ranking_privado,
} 