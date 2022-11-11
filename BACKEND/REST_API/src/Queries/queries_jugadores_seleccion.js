const get = "SELECT * FROM public.\"Jugadores_Seleccion\"";
const getById = "SELECT \"ID\",\"Seleccion\",\"Nombre_Jugador\",\"Apellido1_Jugador\" ,\"Apellido2_Jugador\" FROM public.\"Jugadores_Seleccion\" WHERE \"Seleccion\" = $1";
const checkIdExists = "SELECT \"Nombre_Jugador\" FROM public.\"Jugadores_Seleccion\"  WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Jugadores_Seleccion\" (\"Seleccion\",\"Nombre_Jugador\",\"Apellido1_Jugador\" ,\"Apellido2_Jugador\") VALUES ($1, $2, $3,$4)";
const remove = "DELETE FROM public.\"Jugadores_Seleccion\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Jugadores_Seleccion\" SET \"ID\"=$1,\"Seleccion\"=$2,\"Nombre_Jugador\"=$3,\"Apellido1_Jugador\"=$4,\"Apellido2_Jugador\"=$5 WHERE \"ID\" = $6";
module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}