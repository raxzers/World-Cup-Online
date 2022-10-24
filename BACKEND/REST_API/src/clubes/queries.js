const get = "SELECT * FROM public.\"Clubes\"";
const getById = "SELECT \"ID\",\"Club\" FROM public.\"Clubes\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT \"Club\" FROM public.\"Clubes\" WHERE \"ID\" = '$1'";
const add = "INSERT INTO public.\"Clubes\" (\"ID\",\"Club\") VALUES ('$1', '$2')";
const remove = "DELETE FROM public.\"Clubes\" WHERE \"ID\" = '$1'";
const update = "UPDATE public.\"Clubes\" SET \"ID\"='$1',\"Club\"= '$2' WHERE \"ID\" = '$3'";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}