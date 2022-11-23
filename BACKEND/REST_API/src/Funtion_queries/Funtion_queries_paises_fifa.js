const pool = require("../../database");
const queries = require('../Queries/queries_paises_fifa');

async function get_paises_fifa(){
    const response = await pool.query(queries.get);
    return response.rows
    
}



async function add_paises_fifa(Nombre){

    try {
    const response = await pool.query(queries.add, [Nombre] );}
    catch {
        return (401)
    }
    return ( 200) 
}

async function remove_paises_fifa(id){

    try {
    const response = await pool.query(queries.remove, [id] );}
    catch {
        return (401)
    }
    return ( 200) 
}



module.exports = {
    get_paises_fifa ,
    add_paises_fifa,
    remove_paises_fifa,
} 