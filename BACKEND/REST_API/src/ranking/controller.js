const pool = require("../../database");
const queries = require('./queries');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const Id = req.params.id;
    pool.query(queries.getById, [Id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const { Id,Torneo,Username,Puntaje} = req.body;
    pool.query(queries.checkIdExists, [Id], (error, results) => {
        const found = results.rows.length;
        if(found) {
            res.send("El id ya existe");
        }
        pool.query(queries.add, [Id,Torneo,Username,Puntaje], (error, results) => {
            if(error) throw error;
            res.status(201).send("¡Creado exitosamente!");
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
            res.status(200).send("Eliminado exitosamente");
        });    
    });  
};

const update = (req, res) => {
    const Id = req.params.id;
    const { ID,Torneo,Username,Puntaje } = req.body;

    pool.query(queries.getById, [Id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [Id,Torneo,Username,Puntaje, Id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Actualizado exitosamente");
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