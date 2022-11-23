const get = "SELECT * FROM public.\"Quinielas\"";
const getById = "SELECT * FROM public.\"Quinielas\" WHERE \"Id\" = $1";
const getByname_torneo = "SELECT \"Id\", \"id_Usuario\", \"id_Partido\", \"id_Jugadores_goles_Eq1\", \"id_Jugadores_asistencias_Eq1\", \"id_Jugador_GOAT\", \"Goles_Eq1\", \"Goles_Eq2\", \"id_Jugadores_goles_Eq2\", \"id_Jugadores_asistencias_Eq2\", \"Autogoles_eq1\", \"Autogoles_eq2\" FROM public.\"Quinielas\" q inner join public.\"Partido\" p on q.\"id_Partido\" = p.\"ID\" WHERE p.\"Nombre_Torneo\" = $1";
const checkIdExists = "SELECT * FROM public.\"Quinielas\"  WHERE \"Id\" = $1";
const add = "INSERT INTO public.\"Quinielas\" ( \"id_Usuario\",\"id_Partido\",\"id_Jugadores_goles_Eq1\",\"id_Jugadores_asistencias_Eq1\",\"id_Jugadores_goles_Eq2\",\"id_Jugadores_asistencias_Eq2\",\"Goles_Eq1\",\"Goles_Eq2\",\"Autogoles_eq1\",\"Autogoles_eq2\",\"id_Jugador_GOAT\") VALUES ($1,$2, $3, $4, $5, $6,$7,$8,$9,$10,$11)";
const remove = "DELETE FROM public.\"Quinielas\" WHERE \"Id\" = $1";
const update = "UPDATE public.\"Quinielas\" SET \"Id\" = $1, \"id_Usuario\"=$2,\"id_Partido\"=$3,\"id_Jugadores_goles_Eq1\"=$4,\"id_Jugadores_asistencias_Eq1\"=$5,\"id_Jugadores_goles_Eq2\"=$6,\"id_Jugadores_asistencias_Eq2\"=$7,\"Goles_Eq1\"=$8,\"Goles_Eq2\"=$9,\"Autogoles_eq1\"=$10,\"Autogoles_eq2\"=$11,\"id_Jugador_GOAT\"=$12 WHERE \"Id\" = $13";
const removeBytorneo = "DELETE  FROM public.\"Quinielas\" B  USING (SELECT P.\"ID\" FROM public.\"Torneo\" C INNER JOIN public.\"Partido\" P ON P.\"Nombre_Torneo\" = C.\"Nombre\" WHERE C.\"Nombre\" = $1) T WHERE T.\"ID\" = B.\"id_Partido\"" ;

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
    getByname_torneo,
    removeBytorneo,
}