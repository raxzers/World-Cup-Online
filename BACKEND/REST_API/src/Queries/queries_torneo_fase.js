const get = "SELECT * FROM public.\"Torneo_Fase\"";
const getById = "SELECT id, \"Torneo\", \"Fase\" FROM public.\"Torneo_Fase\" WHERE \"Torneo\" = $1";
const checkIdExists = "SELECT * FROM public.\"Torneo_Fase\" WHERE id = $1";
const add = "INSERT INTO public.\"Torneo_Fase\" ( \"Torneo\", \"Fase\") VALUES ($1, $2)";
const remove = "DELETE FROM public.\"Torneo_Fase\" WHERE id = $1";
const update = "UPDATE public.\"Torneo_Fase\" SET id= $1, \"Torneo\" = $2, \"Fase\" = $3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}