const get = "SELECT * FROM USUARIO";
const getById = "SELECT ID, Torneo, Fase FROM USUARIO WHERE ID = $1";
const checkIdExists = "SELECT U FROM USUARIO U WHERE U.ID = $1";
const add = "INSERT INTO USUARIO (ID, Torneo, Fase) VALUES ($1, $2, $3)";
const remove = "DELETE FROM USUARIO WHERE ID = $1";
const update = "UPDATE USUARIO SET ID = $1, Torneo = $2, Fase = $3 WHERE ID = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}