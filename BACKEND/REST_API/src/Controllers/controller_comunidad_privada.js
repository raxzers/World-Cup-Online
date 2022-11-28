const pool = require("../../database");
const queries = require('../Queries/queries_comunidad_privada');
const queryran= require('../Queries/queries_ranking_privado');
const cadenaAleatoria = require("../../extra_f");
const funciones = require("../Funtion_queries/Funtion_queries_comunidad_privada");
const funciones_ran_priv = require("../Funtion_queries/Funtion_queries_ranking_privado");
const mook = require("../Mooks/Mook_jugadores_club");

const get = async (req, res) => {
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.get_comunidad_privada());
    }
    else {
        res.status(200).json(await funciones.get_comunidad_privada());
    }
    
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getByclub_jugadores_club(id));
    }
    else {
        res.status(200).json(await funciones.getById_comunidad_privada(id));
    }
    
};

const add = async (req, res) => {
    const { NombreComunidad,NombreTorneo,Usuario,Test } = req.body;
    if(NombreComunidad == null) res.status(400).json("Error");
    const COD_Invita=cadenaAleatoria.cadenaAleatoria();
        
    if (Test== "si"){
        var get_var = await mook.getByUseryTorneo(NombreTorneo,Usuario);

    }
    else {
        var get_var = await funciones.getByUseryTorneo(NombreTorneo,Usuario);
    }
    
    const notFound = get_var.rows.length;
    if(notFound){
        res.json("Ya el usuario ya esta en una comunidad privada para este torneo");

    }
    else{
        if (Test== "si"){
            var get_var = await mook.add_comunidad_privada(NombreComunidad,COD_Invita,NombreTorneo);
            var get_var = await mook.add_comunidad_privada(NombreComunidad,COD_Invita,NombreTorneo);
            res.status(201).json();
        }
        else {
            var get_var = await funciones.add_comunidad_privada(NombreComunidad,COD_Invita,NombreTorneo);
            var get_var = await funciones_ran_priv.add_ranking_privado(NombreComunidad,COD_Invita,NombreTorneo);
            res.status(201).json({codigo:COD_Invita});
        }    
};
}

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_comunidad_privada(id);

    }
    else {
        var get_var = await funciones.getById_comunidad_privada(id);
    }

    const notFound = !get_var.rows.length;
    if(notFound){
        res.send("No existe en la base de datos");
            
    } 
    if (Test== "si"){
        var get_var2 = await await mook.remove_comunidad_privada(id); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await await funciones.remove_comunidad_privada(id); 
        res.status(get_var2).json(get_var2); 
    }   
     
};
const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const {  NombreComunidad,COD_Invita,NombreTorneo,Test } = req.body;

    if (Test== "si"){
        var get_var = await mook.getById_comunidad_privada(id);

    }
    else {
        var get_var = await funciones.getById_comunidad_privada(id);
    }
    const notFound = !get_var.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
        }
    if (Test== "si"){
        var get_var2 = await await mook.update_comunidad_privada(id, NombreComunidad,COD_Invita,NombreTorneo); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await await funciones.update_comunidad_privada(id, NombreComunidad,COD_Invita,NombreTorneo); 
        res.status(get_var2).json(get_var2); 
        
    } 

};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}