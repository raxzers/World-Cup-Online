const pool = require("../../database");
const queries = require('../Queries/queries_usuarios');
const encriptar = require("../../extra_f");
const funciones = require("../Funtion_queries/Funtion_queries_usuarios");

const get = async (req, res) => {
    res.status(200).json(await funciones.get_usuario());
};

const getById = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(await funciones.getById_usuario(id));
};

const add = async (req, res) => {
    const { Fecha_Nacimiento,Nombre,Apellido1,Correo,Password,Username,Pais } = req.body;
    if(encriptar.validacion_correo_formato(Correo)){   
        var get_var = await funciones.getBycorreo_usuario(Correo);   
        const notFound = get_var.length;
        if(notFound){
            res.json("Ya el correo en  existe en la base de datos");
            return;
        } 
        else {
            var get_var = await funciones.getByusername_usuario(Username);
            const notFound = get_var.length;
            if(notFound){
                res.json("Ya username en  existe en la base de datos");
                return;
            } 
        else{
            let n_Pass=encriptar.encriptar(Password,"ghjlu568Shg");
            if(!encriptar.filterAlpha(Password)){
                var get_var2 = await funciones.add_usuario(Fecha_Nacimiento,Nombre,Apellido1,Correo,n_Pass,Username,Pais); 
                res.status(get_var2).json(get_var2);  
            }
            else {
                res.status(401).json("Password con formato invalido");
                }
            }
               
        }
        
    }
    else res.status(401).send("Correo con formato invalido");
};

const remove = async (req, res) => {
    const id = parseInt(req.params.id);
    var get_var = await funciones.getById_usuario(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.remove_usuario(id); 
    res.status(get_var2).json(get_var2);  
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const { Fecha_Nacimiento,Nombre,Apellido1,Correo,Rol,Password,Username,Pais  } = req.body;

    var get_var = await funciones.getById_usuario(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    }
    let n_Pass=encriptar.encriptar(Password,"ghjlu568Shg");
    if(!encriptar.filterAlpha(Password)){
        var get_var2 = await funciones.update_usuario(id,Fecha_Nacimiento,Nombre,Apellido1,Correo,n_Pass,Username,Pais,id); 
        res.status(get_var2).json(get_var2); 
    }
    res.status(401).json("Password con formato incorrecto"); 
};

const login = async (req, res) => {
    const {Correo,Password} = req.body;
    var get_var = await funciones.getBycorreo_usuario(Correo); 
    const notFound = !get_var.length;
    if(notFound){
        res.status(401).json("El correo ingresado es incorrecto");
        return;
    }
    
    console.log(get_var[0].Rol);
    if(Password==get_var[0].Password)
        res.status(201).json(get_var[0].Rol);
    else {
        console.log(get_var[0].Rol);
        let n_Pass=encriptar.encriptar(Password,"ghjlu568Shg");
        if(n_Pass==get_var[0].Password)
            res.status(201).json(get_var[0].Rol);
        else res.json("Contraseña incorrecta");
    }
    
    
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
    login,
}