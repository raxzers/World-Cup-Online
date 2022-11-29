const pool = require("../../database");
const queries = require('../Queries/queries_torneo_fase');
const funciones = require("../Funtion_queries/Funtion_queries_torneo_fase");
const mook = require("../Mooks/Mook_torneo_fase");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_torneo_fase());
    }
    else {
        res.status(200).json(await funciones.get_torneo_fase());
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.getById_torneo_fase(id));
    }
    else {
        res.status(200).json(await funciones.getById_torneo_fase(id));
    }
};

const add = async (req, res) => {
    const {Torneo,Fase,Test } = req.body;
    
    if (Test== "si"){
        var get_var = await mook.add_torneo_fase(Torneo,Fase);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_torneo_fase(Torneo,Fase);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;

    if (Test== "si"){
        var get_var = await mook.getById_torneo_fase(id);
    }
    else {
        var get_var = await funciones.getById_torneo_fase(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_torneo_fase(id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.remove_torneo_fase(id); 
        res.status(get_var2).json(get_var2);
    }
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Torneo,Fase,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_torneo_fase(id);
    }
    else {
        var get_var = await funciones.getById_torneo_fase(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_torneo_fase(id,Torneo,Fase); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.update_torneo_fase(id,Torneo,Fase); 
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