const pool = require("../../database");
const queries = require('../Queries/queries_ranking');
const funciones = require("../Funtion_queries/Funtion_queries_ranking");

const get = async (req, res) => {
    res.status(200).json(await funciones.get_ranking());
};

const getById = async (req, res) => {
    const Id = req.params.id;
    res.status(200).json(await funciones.getByname_ranking(Id));
};

const add = async (req, res) => {
    const {id_Torneo,id_Usuario,Puntaje} = req.body;
    
    var get_var = await funciones.add_ranking(id_Torneo,id_Usuario,Puntaje);
    res.status(get_var).json(get_var);
    
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    var get_var = await funciones.getById_ranking(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.remove_ranking(id); 
    res.status(get_var2).json(get_var2);   
};

const update = async (req, res) => {
    const Id = req.params.id;
    const { id_Torneo,id_Usuario,Puntaje } = req.body;

    var get_var = await funciones.getById_ranking(Id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.update_ranking(Id,id_Torneo,id_Usuario,Puntaje,Id); 
    res.status(get_var2).json(get_var2);
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}