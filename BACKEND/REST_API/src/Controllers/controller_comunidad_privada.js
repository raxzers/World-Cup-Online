const pool = require("../../database");
const queries = require('../Queries/queries_comunidad_privada');
const queryran= require('../Queries/queries_ranking_privado');
const cadenaAleatoria = require("../../extra_f");

const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    pool.query(queries.getById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const { NombreComunidad,NombreTorneo,Usuario } = req.body;
    if(NombreComunidad == null) res.status(400).json("Error");
    const COD_Invita=cadenaAleatoria.cadenaAleatoria();
        
            //if(error) {throw error;}
            pool.query(queries.checkUserYTorneo, [NombreTorneo,Usuario], (error, results1) => {
                if(error) {throw error;}
                const notFound = results1.rows.length;
                if(notFound){
                    res.json("Ya el usuario ya esta en una comunidad privada para este torneo");
                    return;
                }
                else{

                    pool.query(queries.add, [NombreComunidad,COD_Invita,NombreTorneo], (error, results) => {
                        pool.query(queryran.add,[Usuario,COD_Invita], (error, results) => {
                        if(error) throw error; 
                        res.status(201).send();
                        });
                        res.json({codigo:COD_Invita});});
                }

                
                
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
    const {  NombreComunidad,COD_Invita,NombreTorneo } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id, NombreComunidad,COD_Invita,NombreTorneo,id], (error, results) => {
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