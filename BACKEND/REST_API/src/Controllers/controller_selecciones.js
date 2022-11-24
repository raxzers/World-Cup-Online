const pool = require("../../database");
const queries = require('../Queries/queries_selecciones');
const funciones = require("../Funtion_queries/Funtion_queries_seleciones");
const mook = require("../Mooks/Mook_selecciones");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_selecciones());
    }
    else {
        res.status(200).json(await funciones.get_selecciones());
    }
};

const getById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.getById_selecciones(id));
    }
    else {
        res.status(200).json(await funciones.getById_selecciones(id));
    }
};

const add = async (req, res) => {
    const {Seleccion,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.add_selecciones(Seleccion);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_selecciones(Seleccion);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;

    if (Test== "si"){
        var get_var = await mook.getById_selecciones(id);
    }
    else {
        var get_var = await funciones.getById_selecciones(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 


    if (Test== "si"){
        var get_var2 = await mook.remove_selecciones(id); 
        res.status(get_var2).json(get_var2); 
    }
    else {
        var get_var2 = await funciones.remove_selecciones(id); 
        res.status(get_var2).json(get_var2);  
    }
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const {Seleccion,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_selecciones(id);
    }
    else {
        var get_var = await funciones.getById_selecciones(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_selecciones(id,Seleccion,id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.update_selecciones(id,Seleccion,id); 
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