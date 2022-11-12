const get = "SELECT * FROM public.\"Torneo\"";
const getById = "SELECT \"ID\",\"Nombre\",\"Fecha_inicio\",\"Fecha_fin\",\"Equipos\",\"Reglas\" FROM public.\"Torneo\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT \"Nombre\" FROM public.\"Torneo\"  WHERE \"ID\" = $1";
const checknameExists = "SELECT * FROM public.\"Torneo\"  WHERE \"Nombre\" = $1";
const add = "INSERT INTO public.\"Torneo\" (\"ID\",\"Nombre\",\"Fecha_inicio\",\"Fecha_fin\",\"Equipos\",\"Reglas\") VALUES ($1, $2, $3,$4,$5,$6)";
const remove = "DELETE FROM public.\"Torneo\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Torneo\" SET \"ID\"=$1,\"Fecha_inicio\"=$2,\"Fecha_fin\"=$3,\"Equipos\"=$4,\"Reglas\"=$5 WHERE \"ID\" = $6";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
    checknameExists,
}