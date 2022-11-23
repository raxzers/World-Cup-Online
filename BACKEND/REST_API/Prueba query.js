const app = require("./index");
const pool = require("./database");
const queries = require('./src/Queries/queries_clubes');
const e = require("express");

async function get_clubes(){
    const response = await pool.query(queries.get);
    return response.rows
    
}

async function add_clubes(Club){

    try {
    const response = await pool.query(queries.add, [Club] );}
    catch {
        return (401)
    }
    return ( 200)
    
    
}

module.exports = {
    get_clubes ,
    add_clubes,
} 