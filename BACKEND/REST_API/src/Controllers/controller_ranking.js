const pool = require("../../database");
const queries = require('../Queries/queries_ranking');
const funciones = require("../Funtion_queries/Funtion_queries_ranking");
const mook = require("../Mooks/Mook_ranking");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_ranking());
    }
    else{   
        res.status(200).json(await funciones.get_ranking());
    }
};

const getById = async (req, res) => {
    const Id = req.params.id;
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.getByname_ranking(Id));
    }
    else{ 
        res.status(200).json(await funciones.getByname_ranking(Id));
    }
};

const add = async (req, res) => {
    const {id_Torneo,id_Usuario,Puntaje,Test} = req.body;
    if (Test== "si"){
        var get_var = await mook.add_ranking(id_Torneo,id_Usuario,Puntaje);
        res.status(get_var).json(get_var);
    }
    else{ 
        var get_var = await funciones.add_ranking(id_Torneo,id_Usuario,Puntaje);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_ranking(id);
    }
    else{
        var get_var = await funciones.getById_ranking(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_ranking(id); 
        res.status(get_var2).json(get_var2);
    }
    else{
        var get_var2 = await funciones.remove_ranking(id); 
        res.status(get_var2).json(get_var2);   
    }
};

const update = async (req, res) => {
    const Id = req.params.id;
    const { id_Torneo,id_Usuario,Puntaje,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_ranking(Id);
    }
    else{
        var get_var = await funciones.getById_ranking(Id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    }
    if (Test== "si"){
        var get_var2 = await mook.update_ranking(Id,id_Torneo,id_Usuario,Puntaje,Id); 
        res.status(get_var2).json(get_var2);
    }
    else{ 
        var get_var2 = await funciones.update_ranking(Id,id_Torneo,id_Usuario,Puntaje,Id); 
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