const get = "SELECT * FROM public.\"Torneo\"";
const getById = "SELECT \"ID\",\"Nombre\",\"Fecha_inicio\",\"Fecha_fin\",\"Equipos\",\"Reglas\" FROM public.\"Torneo\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT \"Nombre\" FROM public.\"Torneo\"  WHERE \"ID\" = $1";
const checknameExists = "SELECT \"Nombre\" FROM public.\"Torneo\"  WHERE \"Nombre\" = $1";
const add = "INSERT INTO public.\"Torneo\" (\"ID\",\"Nombre\",\"Fecha_inicio\",\"Fecha_fin\",\"Equipos\",\"Reglas\") VALUES ($1, $2, $3,$4,$5,$6)";
const remove = "DELETE FROM public.\"Torneo\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Torneo\" SET \"ID\"=$1,\"Nombre\"=$2,\"Fecha_inicio\"=$3,\"Fecha_fin\"=$4,\"Equipos\"=$5,\"Reglas\"=$6 WHERE \"ID\" = $7";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}