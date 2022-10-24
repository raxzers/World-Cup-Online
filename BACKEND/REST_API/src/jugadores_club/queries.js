const get = "SELECT * FROM public.\"Jugadores_Club\"";
const getById = "SELECT \"ID\",\"Club\",\"Nombre_Jugador\",\"Apellido1_Jugador\" ,\"Apellido2_Jugador\" FROM public.\"Jugadores_Club\" WHERE \"ID\" = '$1'";
const checkIdExists = "SELECT * FROM public.\"Jugadores_Club\" WHERE \"ID\" = '$1'";
const add = "INSERT INTO public.\"Jugadores_Club\" (\"ID\",\"Club\",\"Nombre_Jugador\",\"Apellido1_Jugador\" ,\"Apellido2_Jugador\") VALUES ('$1', '$2', '$3','$4','$5')";
const remove = "DELETE FROM public.\"Jugadores_Club\" WHERE \"ID\" = '$1'";
const update = "UPDATE public.\"Jugadores_Club\" SET \"ID\"='$1',\"Club\"='$2',\"Nombre_Jugador\"='$3',\"Apellido1_Jugador\"='$4',\"Apellido2_Jugador\"='$5' WHERE \"ID\" = '$6'";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}