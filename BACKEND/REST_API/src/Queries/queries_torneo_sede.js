const get = "SELECT * FROM public.\"Torneo_Sede\"";
const getById = "SELECT * FROM public.\"Torneo_Sede\" WHERE \"Torneo\" = $1";
const checkIdExists = "SELECT * FROM public.\"Torneo_Sede\" WHERE id = $1";
const add = "INSERT INTO public.\"Torneo_Sede\" ( \"Torneo\", \"Sede\") VALUES ($1, $2)";
const remove = "DELETE FROM public.\"Torneo_Sede\" WHERE id = $1";
const update = "UPDATE public.\"Torneo_Sede\" SET id= $1, \"Torneo\" = $2, \"Sede\" = $3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}