const pool = require("../../database");
const queries = require('../Queries/queries_ranking_privado');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const username = req.params.id;
    pool.query(queries.getById, [username], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getByComunidad = (req, res) => {
    const comunidad = req.params.id;
    pool.query(queries.getbycomunidad,[comunidad], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const {Usuario,COD_Invita } = req.body;
        pool.query(queries.add, [Usuario,COD_Invita], (error, results) => {
            if(error) throw error;
            res.status(201).send();
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
    const {  Usuario,NombreComunidad } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [ Usuario,NombreComunidad,id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });
    });
};

module.exports = {
    get,
    getById,
    getByComunidad,
    add,
    remove,
    update,
}