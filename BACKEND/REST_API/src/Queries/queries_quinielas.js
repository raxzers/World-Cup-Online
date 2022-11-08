const get = "SELECT * FROM public.\"Quinielas\"";
const getById = "SELECT * FROM public.\"Quinielas\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT * FROM public.\"Quinielas\"  WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Quinielas\" ( \"id_Usuario\",\"id_Partido\",\"id_Jugadores_goles_Eq1\",\"id_Jugadores_asistencias_Eq1\",\"id_Jugadores_goles_Eq2\",\"id_Jugadores_asistencias_Eq2\",\"Goles_Eq1\",\"Goles_Eq2\",\"Autogoles\",\"id_Jugador_GOAT\") VALUES ($1,$2,ARRAY $3,ARRAY $4,ARRAY $5,ARRAY $6,$7,$8,$9,$10)";
const remove = "DELETE FROM public.\"Quinielas\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Quinielas\" SET \"ID\" = $1, \"id_Usuario\"=$2,\"id_Partido\"$3,\"id_Jugadores_goles_Eq1\"=$4,\"id_Jugadores_asistencias_Eq1\"=$5,\"id_Jugadores_goles_Eq2\"=$6,\"id_Jugadores_asistencias_Eq2\"=$7,\"Goles_Eq1\"=$8,\"Goles_Eq2\"=$9,\"Autogoles\"=$10,\"id_Jugador_GOAT\"=$11 WHERE \"ID\" = $12";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}