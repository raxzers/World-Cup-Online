async function get_ranking(){
    const response = [{
        "Id": "1",
        "id_Torneo": "WQLP3a",
        "id_Usuario": "1",
        "Puntaje": 100
      },
      {
        "Id": "2",
        "id_Torneo": "WQLP3a",
        "id_Usuario": "2",
        "Puntaje": 300
      },
      {
        "Id": "3",
        "id_Torneo": "Vz7478",
        "id_Usuario": "0",
        "Puntaje": 0
      }];
    return response
    
    
}

async function getById_ranking(id){
    var response = [];
    if(id==3) {
        response = [{
            "Id": "3",
            "id_Torneo": "Vz7478",
            "id_Usuario": "0",
            "Puntaje": 0
          }];
    }
    return response
    
}

async function getByname_ranking(name){
    var response = [];
    if(name=="Libertadores") {
        response = [{
            "Id": "1",
            "id_Torneo": "WQLP3a",
            "id_Usuario": "1",
            "Puntaje": 100
          },
          {
            "Id": "2",
            "id_Torneo": "WQLP3a",
            "id_Usuario": "2",
            "Puntaje": 300
          }];
    }
    return response
}

async function add_ranking(id_Torneo,id_Usuario,Puntaje){

    return (200)
}

async function remove_ranking(id){
    return (200)
}

async function update_ranking(id,id_Torneo,id_Usuario,Puntaje){

    return (200) 
}

module.exports = {
    get_ranking ,
    add_ranking,
    getById_ranking,
    remove_ranking,
    update_ranking,
    getByname_ranking,
} 