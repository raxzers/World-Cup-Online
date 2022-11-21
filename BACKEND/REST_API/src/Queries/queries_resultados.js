const get = "SELECT * FROM public.\"Resultados\"";
const getById = "SELECT * FROM public.\"Resultados\" WHERE \"Id\" = $1";
const getByname_torneo = "SELECT \"Id\", \"id_Partido\", \"id_Jugadores_goles_Eq1\", \"id_Jugadores_asistencias_Eq1\", \"id_Jugador_GOAT\", \"Goles_Eq1\", \"Goles_Eq2\", \"id_Jugadores_goles_Eq2\", \"id_Jugadores_asistencias_Eq2\", \"Autogoles_eq1\", \"Autogoles_eq2\" FROM public.\"Resultados\" q inner join public.\"Partido\" p on q.\"id_Partido\" = p.\"ID\" WHERE p.\"Nombre_Torneo\" = $1";
const checkIdExists = "SELECT * FROM public.\"Resultados\"  WHERE \"Id\" = $1";
const add = "INSERT INTO public.\"Resultados\" ( \"id_Partido\",\"id_Jugadores_goles_Eq1\",\"id_Jugadores_asistencias_Eq1\",\"id_Jugadores_goles_Eq2\",\"id_Jugadores_asistencias_Eq2\",\"Goles_Eq1\",\"Goles_Eq2\",\"Autogoles_eq1\",\"Autogoles_eq2\",\"id_Jugador_GOAT\") VALUES ($1,$2, $3, $4, $5, $6,$7,$8,$9,$10)";
const remove = "DELETE FROM public.\"Resultados\" WHERE \"Id\" = $1";
const update = "UPDATE public.\"Resultados\" SET \"Id\" = $1,\"id_Partido\"=$2,\"id_Jugadores_goles_Eq1\"=$3,\"id_Jugadores_asistencias_Eq1\"=$4,\"id_Jugadores_goles_Eq2\"=$5,\"id_Jugadores_asistencias_Eq2\"=$6,\"Goles_Eq1\"=$7,\"Goles_Eq2\"=$8,\"Autogoles_eq1\"=$9,\"Autogoles_eq2\"=$10,\"id_Jugador_GOAT\"=$11 WHERE \"Id\" = $12";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
    getByname_torneo,
}