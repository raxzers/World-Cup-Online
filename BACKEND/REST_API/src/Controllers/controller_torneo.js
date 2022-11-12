const cadenaAleatoria = require("../../extra_f");
const pool = require("../../database");
const queries = require('../Queries/queries_torneo');
const queries_Equipos = require('../Queries/queries_torneo_equipos');
const queries_fase = require('../Queries/queries_torneo_fase');
const queries_ranking = require('../Queries/queries_ranking');
const Comparar_fechas_torneo = require('../../extra_f');

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
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas,listaEquipos,Fase } = req.body;
    let ID= cadenaAleatoria();

    pool.query("select now()", (error, results1) => {
        var fecha_inicio = new Date(Fecha_inicio);
        var fecha_fin = new Date(Fecha_fin);
        console.log(fecha_inicio);
        console.log(fecha_fin);
        console.log(results1.rows[0].now);
        if (fecha_inicio < fecha_fin){
            
            if (results1.rows[0].now < fecha_inicio) {
                pool.query(queries.checknameExists, [Nombre], (error, results2) => {    
                    const found2 = results2.rows.length;
                    if(found2==1) {
                        res.send("nombre repetidoS");
                    } 
                    else {
                    pool.query(queries.checkIdExists, [ID], (error, results1) => {
                        
                        
                        const found1 = results1.rows.length;
                        if(found1) {
                            res.send("id repetido");
                        }
                        
                        pool.query(queries.add, [ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas], (error, results) => {
                            if(error) throw error;
                            console.log('Creo torneo');
                            for(var i=0; i<listaEquipos.length;i++){
                                pool.query(queries_Equipos.add, [Nombre,listaEquipos[i]], (error, results) => {
                                    if(error) {
                                        pool.query(queries_Equipos.remove, [ID], (error, results) => {}); 
                                        throw error;}
                                    else {
                                        console.log('Agrego Equipos');}
                                });
                            }
                            for(var i=0; i<Fase.length;i++){
                                pool.query(queries_fase.add, [Nombre,Fase[i]], (error, results) => {
                                    if(error) {pool.query(queries_fase.remove, [ID], (error, results) => {}); pool.query(queries_Equipos.remove, [ID], (error, results) => {}); throw error;}
                                    else {
                                        console.log('Agrego Fase');}
                                });
                            }
                            pool.query(queries_ranking.add, [ID,0,0], (error, results) => {
                                if(error) throw error;
                            });
                            res.status(201).send("agrego ranking");
                        });
                    
                    });}
                });
                console.log(true);}
            else {console.log(false)
                res.send("Fecha inicio en menor a la actual");};
        }
        else {
            console.log(false);
            res.send("Fecha inicio en mayor a la fecha fin");}});

    
    
    
};

const remove = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        } 
        pool.query(queries_Equipos.remove_por_torneo, [id], (error, results) => {
            if(error) throw error;
        });
        pool.query(queries_fase.remove_por_torneo_fase, [id], (error, results) => {
            if(error) throw error;
        });
        pool.query(queries.remove, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });    
    });  
};

const update = (req, res) => {
    const id = req.params.id;
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = results.rows.length;
        if(!notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id,Fecha_inicio,Fecha_fin,Equipos,Reglas, id], (error, results) => {
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