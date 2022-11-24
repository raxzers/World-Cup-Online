const pool = require("../../database");
const queries = require('../Queries/queries_torneo_equipos');
const funciones = require("../Funtion_queries/Funtion_queries_torneo_equipos");
const mook = require("../Mooks/Mook_torneo_equipos");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_torneo_equipos());
    }
    else {
        res.status(200).json(await funciones.get_torneo_equipos());
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.getById_torneo_equipos(id));
    }
    else {
        res.status(200).json(await funciones.getById_torneo_equipos(id));
    }
};

const add = async (req, res) => {
    const { Torneo,Equipo,Test} = req.body;
    if (Test== "si"){
        var get_var = await mook.add_torneo_equipos(Torneo,Equipo);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_torneo_equipos(Torneo,Equipo);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;

    if (Test== "si"){
        var get_var = await mook.getById_torneo_equipos(id);
    }
    else {
        var get_var = await funciones.getById_torneo_equipos(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_torneo_equipos(id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.remove_torneo_equipos(id); 
        res.status(get_var2).json(get_var2); 
    } 
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const {Torneo,Equipo,Test} = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_jtorneo_equipos(id);
    }
    else {
        var get_var = await funciones.getById_jtorneo_equipos(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_torneo_equipos(id,Torneo,Equipo,id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.update_torneo_equipos(id,Torneo,Equipo,id); 
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