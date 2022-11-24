const pool = require("../../database");
const queries = require('../Queries/queries_clubes');
const clubes = require("../Funtion_queries/Funtion_queries_clubes");
const mook = require("../Mooks/Mook_clubes");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_clubes());
    }
    else {
        res.status(200).json(await clubes.get_clubes());
    }
    
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;
    if (Test== "si"){
        res.status(200).json(await mook.getById_clubes(id));
    }
    else {
    res.status(200).json(await clubes.getById_clubes(id));
    }
};

const add = async (req, res) => {
    const { Club,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.add_clubes(Club);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await clubes.add_clubes(Club);
        res.status(get_var).json(get_var);
    }
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_clubes(id);
    }
    else {
        var get_var = await clubes.getById_clubes(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_clubes(id);
    }
    else {
        var get_var2 = await clubes.remove_clubes(id);
    }
    //var get_var2 = await clubes.remove_clubes(id); 
    res.status(get_var2).json(get_var2);
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const {  Club,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_clubes(id);
    }
    else {
        var get_var = await clubes.getById_clubes(id);
    }
    //var get_var = await clubes.getById_clubes(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_clubes(id,Club);
    }
    else {
        var get_var2 = await clubes.update_clubes(id,Club);
    }
    //var get_var2 = await clubes.update_clubes(id,Club); 
    res.status(get_var2).json(get_var2);
    
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}