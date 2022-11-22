const get = "SELECT * FROM public.\"Comunidad_Privada\"";
const getById = "SELECT \"ID\",\"Nombre\" FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT \"Nombre\" FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Comunidad_Privada\"( \"Nombre\", \"COD_Invita\", \"id_Torneo\")VALUES ($1, $2, (select \"ID\" from public.\"Torneo\" where public.\"Torneo\".\"Nombre\" = $3));";
const remove = "DELETE FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Comunidad_Privada\" SET \"ID\"=$1,\"Nombre\"= $2,\"COD_Invita\"=$3,\"id_Torneo\"=$4 WHERE \"ID\" = $5";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}