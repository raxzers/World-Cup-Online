const pool = require("../../database");
const queries = require('../Queries/queries_quinielas');

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const { id_Usuario,id_Partido,id_Jugadores_goles,id_Jugadores_asistencias,id_Jugador_GOAT } = req.body;
    
        pool.query(queries.add, [id_Usuario,id_Partido,id_Jugadores_goles,id_Jugadores_asistencias,id_Jugador_GOAT], (error, results) => {
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
    const { id_Usuario,id_Partido,id_Jugadores_goles,id_Jugadores_asistencias,id_Jugador_GOAT } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id,id_Usuario,id_Partido,id_Jugadores_goles,id_Jugadores_asistencias,id_Jugador_GOAT, id], (error, results) => {
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