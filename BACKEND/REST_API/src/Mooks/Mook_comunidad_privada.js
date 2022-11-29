

async function get_comunidad_privada(){
    const response = [
        {
            "Nombre": "wwwe",
            "COD_Invita": "Leo",
            "Id_Torneo": "wddwqe",
            "Test":"si" 
        },
        {
            "Nombre": "wwwe2",
            "COD_Invita": "Leo2",
            "Id_Torneo": "wddwqe2",
            "Test":"si" 
        }];
    return response
    
}

async function getById_comunidad_privada(id){
    var response = [];
    if(id==1) {
        response = [
            {
                "Nombre": "wwwe",
                "COD_Invita": "Leo",
                "Id_Torneo": "wddwqe",
                "Test":"si" 
            }
          ];
    }
    return response
}

async function getByUseryTorneo(NombreTorneo,Usuario){
    var response = [];
    if(NombreTorneo=="wwwe") {
        response = [
            {
                "Nombre": "wwwe",
                "COD_Invita": "Leo",
                "Id_Torneo": "wddwqe",
                "Test":"si" 
            }];
    }
    return response
}
async function add_comunidad_privada(Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

async function remove_comunidad_privada(id){

    return (200)  
}

async function update_comunidad_privada(id,Club,Nombre_Jugador,Apellido1_Jugador,Apellido2_Jugador){

    return (200) 
}

module.exports = {
    get_comunidad_privada ,
    add_comunidad_privada,
    getById_comunidad_privada,
    remove_comunidad_privada,
    update_comunidad_privada,
    getByUseryTorneo,
} 