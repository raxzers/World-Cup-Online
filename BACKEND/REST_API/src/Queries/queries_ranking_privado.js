const get = "SELECT * FROM public.\"Ranking_privado\"";
const getById = "SELECT \"Id_comunidad\",\"Id_usuario\" FROM public.\"Ranking_privado\" WHERE \"Id_comunidad\" = $1";
const checkIdExists = "SELECT \"Id_usuario\" FROM public.\"Ranking_privado\" WHERE \"Id_usuario\" = $1";/*revisar */
const add = "INSERT INTO public.\"Ranking_privado\" (\"Id_usuario\",\"id_Torneo\") VALUES ($1,$2,$3)";
const remove = "DELETE FROM public.\"Ranking_privado\" WHERE \"Id_usuario\" = $1";
const update = "UPDATE public.\"Ranking_privado\" SET \"Id_comunidad\"=$1,\"Id_usuario\"= $2, WHERE \"Id_usuario\" = $3";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}