async function get_usuario(){
    const response = [ {
        "ID": "8",
        "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
        "Nombre": "Leo",
        "Apellido1": "Alvarez",
        "Correo": "cocwjs@qas",
        "Password": "sss",
        "Rol": "user",
        "Username": "Guillen",
        "Pais": "Japón"
      },
      {
        "ID": "10",
        "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
        "Nombre": "Leo",
        "Apellido1": "Alvarez",
        "Correo": "cocwjs@qas",
        "Password": "sss",
        "Rol": "user",
        "Username": "Guillen00q",
        "Pais": "Japón"
      }];
    return response
}

async function getById_usuario(id){
    var response = [];
    if(id==8) {
        response = [{
            "ID": "8",
            "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
            "Nombre": "Leo",
            "Apellido1": "Alvarez",
            "Correo": "cocwjs@qas",
            "Password": "sss",
            "Rol": "user",
            "Username": "Guillen",
            "Pais": "Japón"
          }];
    }
    return response
    
    
}

async function getBycorreo_usuario(correo){
    var response = [];
    if(correo=="cocwjs@qas") {
        response = [{
            "ID": "10",
            "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
            "Nombre": "Leo",
            "Apellido1": "Alvarez",
            "Correo": "cocwjs@qas",
            "Password": "sss",
            "Rol": "user",
            "Username": "Guillen00q",
            "Pais": "Japón"
          }];
    }
    return response
    
    
}
async function getByusername_usuario(username){
    var response = [];
    if(username=="Guillen00q") {
        response = [{
            "ID": "10",
            "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
            "Nombre": "Leo",
            "Apellido1": "Alvarez",
            "Correo": "cocwjs@qas",
            "Password": "sss",
            "Rol": "user",
            "Username": "Guillen00q",
            "Pais": "Japón"
          }];
    }
    return response
    
    
}

async function add_usuario(Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais ){

    return (200) 
}

async function remove_usuario(id){

    return (200) 
}

async function update_usuario(id,Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais ){

    return (200) 
}

module.exports = {
    get_usuario ,
    add_usuario,
    getById_usuario,
    remove_usuario,
    update_usuario,
    getBycorreo_usuario,
    getByusername_usuario,
} 