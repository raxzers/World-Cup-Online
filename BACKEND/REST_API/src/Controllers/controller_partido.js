const pool = require("../../database");
const queries = require('../Queries/queries_partido');

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
    //const id = (req.params.id);
    const {Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Equipo_2,Sede,Estado_del_partido } = req.body;
    
    pool.query(queries.add, [Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Equipo_2,Sede,Estado_del_partido], (error, results) => {
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
    const { Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Goles_Equipo_1,Equipo_2,Goles_Equipo_2,Sede,Estado_del_partido} = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Goles_Equipo_1,Equipo_2,Goles_Equipo_2,Sede,Estado_del_partido, id], (error, results) => {
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