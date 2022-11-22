const pool = require("../../database");
const queries = require('../Queries/queries_usuarios');
const encriptar = require("../../extra_f");

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

const getByusername = (req, res) => {
    const Username = req.params.Username;
    pool.query(queries.getByusername, [Username], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const add = (req, res) => {
    const { Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais } = req.body;
    if(encriptar.validacion_correo_formato(Correo)){   
        pool.query(queries.getBycorreo, [Correo], (error, results) => {
            const notFound = results.rows.length;
            if(notFound){
                res.json("Ya el correo en  existe en la base de datos");
                return;
            } 
            else {
                pool.query(queries.getByusername, [Username], (error, results) => {
                    const notFound = results.rows.length;
                    if(notFound){
                        res.json("Ya username en  existe en la base de datos");
                        return;
                    } 
                    else{
                        let n_Pass=encriptar.encriptar(Password,"ghjlu568Shg");
                        if(!encriptar.filterAlpha(Password)){
                            pool.query(queries.add, [Fecha_Nacimiento,Nombre,Apellido1,Correo,n_Pass,Username,Pais], (error, results) => {
                                if(error) throw error;
                                res.status(201).send();
                            });
                        }
                        else {
                            res.status(201).json("Password con formato invalido");
                        }
                    }
                });
            }
        });
    }
    else res.status(201).send("Correo con formato invalido");
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
    const { Fecha_Nacimiento,Nombre,Apellido1,Correo,Rol,Password,Username,Pais  } = req.body;

    pool.query(queries.getById, [id], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.send("No existe en la base de datos");
            return;
        }
        pool.query(queries.update, [id,Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Rol,Username,Pais , id], (error, results) => {
            if(error) throw error;
            res.status(200).send();
        });
    });
};

const login = (req, res) => {
    const {Username,Password} = req.body;
    pool.query(queries.getByusername, [Username], (error, results) => {
        const notFound = !results.rows.length;
        if(notFound){
            res.status(200).json("El usuario ingresado es incorrecto");
            return;
        }
        pool.query(queries.getByusername, [Username], (error, results) => {
            if(error) throw error;

            console.log(results.rows[0].Rol);
            if(Password==results.rows[0].Password)
                res.status(201).json(results.rows[0].Rol);
            else {
                console.log(results.rows[0].Rol);
                let n_Pass=encriptar.encriptar(Password,"ghjlu568Shg");
                if(n_Pass==results.rows[0].Password)
                    res.status(201).json(results.rows[0].Rol);
                else res.json("Contraseña incorrecta");
            }
        });
    });
};

module.exports = {
    get,
    getById,
    getByusername,
    add,
    remove,
    update,
    login,
}