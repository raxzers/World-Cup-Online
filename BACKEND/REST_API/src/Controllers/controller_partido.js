const pool = require("../../database");
const queries = require('../Queries/queries_partido');
const queries_torneo = require('../Queries/queries_torneo');
const funciones = require("../Funtion_queries/Funtion_queries_partidos");
const funciones_torneo = require("../Funtion_queries/Funtion_queries_torneo");
const mook = require("../Mooks/Mook_partidos");
const mook_torneo = require("../Mooks/Mook_torneo");

const get = async (req, res) => {
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.get_partido());
    }
    else {
        res.status(200).json(await funciones.get_partido());
    }
};

const getById = async (req, res) => {
    const id = req.params.id;
    const { Test } = req.body;

    if (Test== "si"){
        res.status(200).json(await mook.getByname_partido(id));
    }
    else {
        res.status(200).json(await funciones.getByname_partido(id));
    }
};

const add = async (req, res) => {
    //const id = (req.params.id);
    const { Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido,Test } = req.body;

    if (Test== "si"){
        var results = await mook_torneo.getByname_torneo(Nombre_Torneo);
    }
    else{
        var results = await funciones_torneo.getByname_torneo(Nombre_Torneo);
    }
    
    console.log(results[0].Fecha_inicio);
    const notFound = !results.length;
    if(notFound){
        res.send("Torneo No existe en la base de datos");
        return;
    } 
        pool.query("select now()", async (error, results1) => {

            var fecha_inicio = new Date(results[0].Fecha_inicio);
            var fecha_fin = new Date(results[0].Fecha_fin);
            var fecha_partido = new Date(Fecha);
            console.log("------------------------------------------------");
            console.log(fecha_inicio);
            console.log(fecha_fin);
            console.log(results1.rows[0].now);
            console.log(fecha_partido);
            if (fecha_inicio < fecha_partido && fecha_partido < fecha_fin) {

                if (results1.rows[0].now < fecha_partido) {
                    if (Test== "si"){
                        var get_var = await mook.add_partido(Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido);
                        res.status(get_var).json(get_var);
                    }
                    else{
                        var get_var = await funciones.add_partido(Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido);
                        res.status(get_var).json(get_var);
                    }
                }

                else { res.send("Fecha del partido es menor a la actual"); }

            }
            else {
                res.send("Fecha del partido  no esta entre el rango del torneo");
            }
        });
    


};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_partido(id);
    }
    else{
        var get_var = await funciones.getById_partido(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.remove_partido(id); 
        res.status(get_var2).json(get_var2);
    }
    else{
        var get_var2 = await funciones.remove_partido(id); 
        res.status(get_var2).json(get_var2);
    }
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Goles_Equipo_1, Equipo_2, Goles_Equipo_2, Sede, Estado_del_partido,Test } = req.body;
    if (Test== "si"){
        var get_var = await mook.getById_partido(id);
    }
    else{
        var get_var = await funciones.getById_partido(id);
    }
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    if (Test== "si"){
        var get_var2 = await mook.update_partido(id,Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Goles_Equipo_1, Equipo_2, Goles_Equipo_2, Sede, Estado_del_partido,id); 
        res.status(get_var2).json(get_var2);
    }
    else{
        var get_var2 = await funciones.update_partido(id,Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Goles_Equipo_1, Equipo_2, Goles_Equipo_2, Sede, Estado_del_partido,id); 
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