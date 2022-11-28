const pool = require("../../database");
const queries = require('../Queries/queries_ranking_privado');
const funciones = require("../Funtion_queries/Funtion_queries_ranking_privado");
const mook = require("../Mooks/Mook_ranking_privado");

const get = async (req, res) => {
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.get_ranking_privado());
    }
    else {
        res.status(200).json(await funciones.get_ranking_privado());
    }
    
};

const getById = async (req, res) => {
    const username = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getById_ranking_privado(username));
    }
    else {
        res.status(200).json(await funciones.getById_ranking_privado(username));
    }
    
};

const getByComunidad = async (req, res) => {
    const comunidad = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getBycomunidad_ranking_privado(comunidad));
    }
    else {
        res.status(200).json(await funciones.getBycomunidad_ranking_privado(comunidad));
    }
    
};

const add = async (req, res) => {
    const {Usuario,COD_Invita,test } = req.body;
    if(Usuario == null) res.status(400).json("Error");
    if (Test== "si"){
        var get_var = await mook.add_ranking_privado(Usuario,COD_Invita);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_ranking_privado(Usuario,COD_Invita);
        res.status(get_var).json(get_var);
    }
    
    
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    if (Test== "si"){
        var get_var = await mook.getById_ranking_privado(id);
    }
    else {
        var get_var = await funciones.getById_ranking_privado(id);
    }
    const notFound = !get_var.rows.length;
    if(notFound){
        res.send("No existe en la base de datos");     
    } 
    if (Test== "si"){
        var get_var = await mook.remove_ranking_privado(id);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.remove_ranking_privado(id);
        res.status(get_var).json(get_var);
    }
     

};
const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const {  Usuario,NombreComunidad,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_ranking_privado(id);
    }
    else {
        var get_var = await funciones.getById_ranking_privado(id);
    }
    const notFound = !results.rows.length;
    if(notFound){
        res.send("No existe en la base de datos");
    }
    if (Test== "si"){
        var get_var = await mook.remove_ranking_privado(id);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.update_ranking_privado(Usuario,NombreComunidad,id);
        res.status(get_var).json(get_var);
    }
    
};

module.exports = {
    get,
    getById,
    getByComunidad,
    add,
    remove,
    update,
}