const get = "SELECT * FROM public.\"Quinielas\"";
const getById = "SELECT * FROM public.\"Quinielas\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT * FROM public.\"Quinielas\"  WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Quinielas\" ( \"id_Usuario\",\"id_Partido\",\"id_Jugadores_goles\",\"id_Jugadores_asistencias\",\"id_Jugador_GOAT\") VALUES ($1,$2,ARRAY $3,ARRAY $4,$5)";
const remove = "DELETE FROM public.\"Quinielas\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Quinielas\" SET \"ID\" = $1, \"id_Usuario\"=$2,\"id_Partido\"=$3,\"id_Jugadores_goles\"=ARRAY $4,\"id_Jugadores_asistencias\"= ARRAY $5,\"id_Jugador_GOAT\"=$6 WHERE \"ID\" = $7";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}