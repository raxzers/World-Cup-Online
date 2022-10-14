const get = "SELECT * FROM EQUIPO";
const getById = "SELECT nombre, origen, categoria FROM EQUIPO WHERE origen = $1";
const checkIdExists = "SELECT E FROM EQUIPO WHERE E.origen = $1";
const add = "INSERT INTO EQUIPO (nombre, origen, categoria) VALUES ($1, $2, $3)";
const remove = "DELETE FROM EQUIPO WHERE nombre = $1";
const update = "UPDATE EQUIPO SET nombre = $1, origen = $2, categoria = $3 WHERE nombre = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}