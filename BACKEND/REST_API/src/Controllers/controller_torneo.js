const cadenaAleatoria = require("../../extra_f");
const pool = require("../../database");
const funciones = require("../Funtion_queries/Funtion_queries_torneo");
const funciones_equipos = require("../Funtion_queries/Funtion_queries_torneo_equipos");
const funciones_fases = require("../Funtion_queries/Funtion_queries_torneo_fase");
const funciones_ranking = require("../Funtion_queries/Funtion_queries_ranking");
const funciones_quniniela = require("../Funtion_queries/Funtion_queries_quinielas");
const funciones_partido = require("../Funtion_queries/Funtion_queries_partidos");

const get = async (req, res) => {
    res.status(200).json(await funciones.get_torneo());
};

const getById = async (req, res) => {
    const id = req.params.id;
    res.status(200).json(await funciones.getById_torneo(id));
};

const add = async (req, res) => {
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas,listaEquipos,Fase } = req.body;
    let ID= cadenaAleatoria.cadenaAleatoria();

    pool.query("select now()", async (error, results1) => {
        var fecha_inicio = new Date(Fecha_inicio);
        var fecha_fin = new Date(Fecha_fin);
        console.log(fecha_inicio);
        console.log(fecha_fin);
        console.log(results1.rows[0].now);
        if (fecha_inicio < fecha_fin){
            
            if (results1.rows[0].now < fecha_inicio) {

                var get_var = await funciones.getByname_torneo(Nombre);
                const notFound = !get_var.length;
                if(!notFound){
                    res.send("El nombre del torneo ya existe, favor ingresar otro");
                    return;
                } 
                else {
                    var get_var2 = await funciones.getById_torneo(ID);
                    const notFound2 = !get_var2.length;
                    if(!notFound2){
                        res.send("Intentelo de nuevo");
                        return;
                    }
                    else { 
                        var get_var2 = await funciones.add_torneo(ID,Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas);
                        console.log('Creo torneo');
                        console.log(get_var2);
                        for(var i=0; i<listaEquipos.length;i++){
                            var get_var4 = await funciones_equipos.add_torneo_equipos(Nombre,listaEquipos[i]);
                            console.log('Creo equipos');
                            console.log(get_var4);
                        }
                        
                        for(var i=0; i<Fase.length;i++){
                            var get_var5 = await funciones_fases.add_torneo_fase(Nombre,Fase[i]);
                            console.log('Creo fases');
                            console.log(get_var5);
                        }
                        
                        var get_var6 = await funciones_ranking.add_ranking(ID,0,0);
                        console.log('Creo ranking');
                        console.log(get_var6);
                        res.status(200).json(200);
                    }
                }
                
                console.log(true);}
            else {console.log(false)
                res.json("Fecha inicio es menor a la actual");};
        }
        else {
            console.log(false);
            res.json("Fecha inicio es mayor a la fecha fin");}});

    
    
    
};

const remove = async (req, res) => {
    const id = req.params.id;
    var get_var = await funciones.getById_torneo(id);
    const notFound = !get_var.length;
    console.log(get_var);
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var1 = await funciones_equipos.remove_torneo_equipos_por_torneo(id);
    console.log(get_var1);
    var get_var2 = await funciones_fases.remove_torneo_fase_por_troneo(id);
    console.log(get_var2);
    var get_var4 = await funciones_ranking.remove_ranking(id);
    console.log(get_var4);
    var get_var5 = await funciones_quniniela.getBytorneo_quinielas(get_var[0].Nombre);
    console.log(get_var[0].Nombre);
    console.log(get_var5);
    var get_var6 = await funciones_partido.getBytorneo_quinielas(id);
    console.log(get_var[0].ID);
    console.log(get_var6);
    var get_var3 = await funciones.remove_torneo(id);
    console.log(get_var3);
  
    if (get_var1 == get_var2 && get_var2 == get_var3 && get_var3 == get_var4)  res.status(200).json(200);
    res.status(401).json(401);
};

const update = async (req, res) => {
    const id = req.params.id;
    const { Nombre,Fecha_inicio,Fecha_fin,Equipos,Reglas } = req.body;

    var get_var = await funciones.getById_torneo(id);
    const notFound = !get_var.length;
    if(notFound){
        res.send("No existe en la base de datos");
        return;
    } 
    var get_var2 = await funciones.update_torneo(id,Fecha_inicio,Fecha_fin,Equipos,Reglas,id); 
    
    res.status(get_var2).json(get_var2);
};

module.exports = {
    get,
    getById,
    add,
    remove,
    update,
}