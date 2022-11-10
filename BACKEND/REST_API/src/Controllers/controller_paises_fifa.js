const pool = require("../../database");
const queries = require('../Queries/queries_paises_fifa');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};


const add = (req, res) => {
    const { Nombre} = req.body;
    
        pool.query(queries.add, [Nombre], (error, results) => {
            if(error) throw error;
            res.status(201).send();
        });
    
};

const remove = (req, res) => {
    const id = req.params.id;
    pool.query(queries.checkIdExists, [id], (error, results) => {
        const notFound = results.rows.length;
        if(!notFound){
            res.send("No existe en la base de datos");
            return;
        } 
        pool.query(queries.remove, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });    
    });  
};



module.exports = {
    get,
    add,
    remove,
}