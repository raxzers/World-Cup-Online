const pool = require("../../database");
const queries = require('../Queries/queries_paises_fifa');
const funciones = require("../Funtion_queries/Funtion_queries_paises_fifa");
const mook = require("../Mooks/Mook_paises_fifa");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_paises_fifa());
    }
    else {
        res.status(200).json(await funciones.get_paises_fifa());
    }
};


const add = async (req, res) => {
    const { Nombre,Test} = req.body;
    if (Test== "si"){
        var get_var = await mook.add_paises_fifa(Nombre);
        res.status(get_var).json(get_var);
    }
    else {
        var get_var = await funciones.add_paises_fifa(Nombre);
        res.status(get_var).json(get_var);
    }
    
};

const remove = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;

    if (Test== "si"){
        var get_var2 = await mook.remove_paises_fifa(id); 
        res.status(get_var2).json(get_var2);
    }
    else {
        var get_var2 = await funciones.remove_paises_fifa(id); 
        res.status(get_var2).json(get_var2);
    }  
};



module.exports = {
    get,
    add,
    remove,
}