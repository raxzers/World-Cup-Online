const get = "SELECT * FROM public.Torneo_Equipos";
const getById = "SELECT ID, Torneo, Equipo FROM public.Torneo_Equipos WHERE ID = $1";
const checkIdExists = "SELECT U FROM public.Torneo_Equipos U WHERE U.ID = $1";
const add = "INSERT INTO public.Torneo_Equipos (ID, Torneo, Equipo) VALUES ($1, $2, $3)";
const remove = "DELETE FROM public.Torneo_Equipos WHERE ID = $1";
const update = "UPDATE public.Torneo_Equipos SET ID= $1, Torneo = $2, Equipo = $3 WHERE ID = $4";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}