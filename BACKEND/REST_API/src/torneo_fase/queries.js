const get = "SELECT * FROM public.\"Torneo_Fase\"";
const getById = "SELECT \"ID\", \"Torneo\", \"Fase\" FROM public.\"Torneo_Fase\" WHERE \"ID\" = '$1'";
const checkIdExists = "SELECT * FROM public.\"Torneo_Fase\" WHERE \"ID\" = '$1'";
const add = "INSERT INTO public.\"Torneo_Fase\" (\"ID\", \"Torneo\", \"Fase\") VALUES ('$1', '$2', '$3')";
const remove = "DELETE FROM public.\"Torneo_Fase\" WHERE \"ID\" = '$1'";
const update = "UPDATE public.\"Torneo_Fase\" SET \"ID\"= '$1', \"Torneo\" = '$2', \"Fase\" = '$3' WHERE \"ID\" = '$4'";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}