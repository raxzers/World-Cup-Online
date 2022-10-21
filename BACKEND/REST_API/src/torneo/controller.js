const pool = require("../../database");
const queries = require('./queries');

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
    const { nombre, numero, domicilio } = req.body;
    pool.query(queries.checkIdExists, [numero], (error, results) => {
        const found = results.rows.length;
        if(found) {
            res.send("El id ya existe");
        }
        pool.query(queries.add, [nombre, numero, domicilio], (error, results) => {
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
    const id = parseInt(req.params.id);
    const { nombre, numero, domicilio } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [nombre, numero, domicilio, id], (error, results) => {
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