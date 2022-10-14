const get = "SELECT * FROM USUARIO";
const getById = "SELECT nombre, numero, domicilio FROM USUARIO WHERE numero = $1";
const checkIdExists = "SELECT U FROM USUARIO U WHERE U.numero = $1";
const add = "INSERT INTO USUARIO (nombre, numero, domicilio) VALUES ($1, $2, $3)";
const remove = "DELETE FROM USUARIO WHERE numero = $1";
const update = "UPDATE USUARIO SET nombre = $1, numero = $2, domicilio = $3 WHERE numero = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}