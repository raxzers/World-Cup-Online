const get = "SELECT * FROM public.\"Partido\"";
const getById = "SELECT * FROM public.\"Partido\" WHERE \"Nombre_Torneo\" = $1  ORDER BY \"Fecha\",\"Hora\" DESC";
const getPartido="SELECT * FROM public.\"Partido\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT \"Nombre_Torneo\" FROM public.\"Partido\" WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Partido\" (\"Fecha\",\"Hora\",\"Nombre_Torneo\",\"Fase\",\"Equipo_1\",\"Goles_Equipo_1\",\"Equipo_2\",\"Goles_Equipo_2\",\"Sede\",\"Estado_del_partido\") VALUES ( $1 , $2 , $3 , $4 , $5 ,0,$6 ,0, $7 , $8  )";
const remove = "DELETE FROM public.\"Partido\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Partido\" SET \"ID\"=$1,\"Fecha\"=$2,\"Hora\"=$3,\"Nombre_Torneo\"=$4,\"Fase\"=$5,\"Equipo_1\"=$6,\"Goles_Equipo_1\"=$7,\"Equipo_2\"=$8,\"Goles_Equipo_2\"=$9,\"Sede\"=$10,\"Estado_del_partido\"=$11 WHERE \"ID\" = $12";


module.exports = {
    get,
    getById,
    checkIdExists,
    getPartido,
    add,
    remove,
    update,
}