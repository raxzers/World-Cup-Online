const get = "SELECT * FROM public.\"Torneo_Equipos\"";
const getById = "SELECT * FROM public.\"Torneo_Equipos\" WHERE \"Torneo\" = $1";
const checkIdExists = "SELECT * FROM public.\"Torneo_Equipos\" WHERE id = $1";
const add = "INSERT INTO public.\"Torneo_Equipos\" ( \"Torneo\", \"Equipo\") VALUES ($1, $2)";
const remove = "DELETE FROM public.\"Torneo_Equipos\" WHERE id = $1";
const update = "UPDATE public.\"Torneo_Equipos\" SET id= $1, \"Torneo\" = $2, \"Equipo\" = $3 WHERE id = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}