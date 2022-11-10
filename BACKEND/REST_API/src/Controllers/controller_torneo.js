const cadenaAleatoria = require("../../extra_f");
const pool = require("../../database");
const queries = require('../Queries/queries_torneo');



const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas } = req.body;
    let ID= cadenaAleatoria();
    
    pool.query(queries.checkIdExists, [ID], (error, results) => {
        const found = results.rows.length;
        if(found) {
            res.send("Intentelo de nuevo");
        }
        pool.query(queries.add, [ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas], (error, results) => {
            if(error) throw error;
            res.status(201).send();
        });
    });
};

const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        } 
        pool.query(queries.remove, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });    
    });  
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas, id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });
    });
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}