const pool = require("../../database");
const queries = require('../Queries/queries_partido');
const queries_torneo = require('../Queries/queries_torneo');


const get = (req, res) => {
    pool.query(queries.get, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getByPartido = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getPartido, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    //const id = (req.params.id);
    const { Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido } = req.body;

    pool.query(queries_torneo.checknameExists, [Nombre_Torneo], (error, results) => {
        pool.query("select now()", (error, results1) => {

            var fecha_inicio = new Date(results.rows[0].Fecha_inicio);
            var fecha_fin = new Date(results.rows[0].Fecha_fin);
            var fecha_partido = new Date(Fecha);
            console.log("------------------------------------------------");
            console.log(fecha_inicio);
            console.log(fecha_fin);
            console.log(results1.rows[0].now);
            console.log(fecha_partido);
            if (fecha_inicio < fecha_partido && fecha_partido < fecha_fin) {

                if (results1.rows[0].now < fecha_partido) {
                    pool.query(queries.add, [Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Equipo_2, Sede, Estado_del_partido], (error, results) => {
                        if (error) throw error;
                        res.status(201).send();
                    });
                }

                else { res.send("Fecha del partido es menor a la actual"); }

            }
            else {
                res.send("Fecha del partido  no esta entre el rango del torneo");
            }
        });
    });


};

const remove = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getById, [id], (error, results) => {
        const notFound = results.rows.length;
        if (notFound) {
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.remove, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send();
        });
    });
};

const update = (req, res) => {
    const id = parseInt(req.params.id);
    const { Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Goles_Equipo_1, Equipo_2, Goles_Equipo_2, Sede, Estado_del_partido } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = results.rows.length;
        if (notFound) {
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id, Fecha, Hora, Nombre_Torneo, Fase, Equipo_1, Goles_Equipo_1, Equipo_2, Goles_Equipo_2, Sede, Estado_del_partido, id], (error, results) => {
            if (error) throw error;
            res.status(200).send();
        });
    });
};

module.exports = {
    get,
    getById,
    getByPartido,
    add,
    remove,
    update,
}