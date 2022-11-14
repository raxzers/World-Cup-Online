const get = "SELECT * FROM public.\"Paises_Fifa\"";
const checkIdExists = "SELECT * FROM public.\"Paises_Fifa\"  WHERE \"Nombre\" = $1";
const add = "INSERT INTO public.\"Paises_Fifa\" (\"Nombre\") VALUES ($1)";
const remove = "DELETE FROM public.\"Paises_Fifa\" WHERE \"Nombre\" = $1";

module.exports = {
    get,
    checkIdExists,
    add,
    remove,
}