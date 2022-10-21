const get = "SELECT * FROM public.Selecciones";
const getById = "SELECT ID, Seleccion FROM public.Selecciones WHERE ID = $1";
const checkIdExists = "SELECT U FROM public.Selecciones U WHERE U.ID = $1";
const add = "INSERT INTO public.Selecciones (ID, Seleccion) VALUES ($1, $2)";
const remove = "DELETE FROM public.Selecciones WHERE ID = $1";
const update = "UPDATE public.Selecciones SET ID = $1, Seleccion = $2 WHERE ID = $3";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}