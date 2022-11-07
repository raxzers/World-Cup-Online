const get = "SELECT * FROM public.\"Usuarios\"";
const getById = "SELECT * FROM public.\"Usuarios\" WHERE \"ID\" = $1";
const checkIdExists = "SELECT * FROM public.\"Usuarios\"  WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Usuarios\" ( \"Fecha_Nacimiento\",\"Nombre\",\"Apellido1\",\"Apellido2\",\"Correo\",\"Password\",\"Rol\",\"Username\") VALUES ($1,$2,$3,$4,$5,$6,'user',$7)";
const remove = "DELETE FROM public.\"Usuarios\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Usuarios\" SET \"ID\" = $1, \"Fecha_Nacimiento\"=$2,\"Nombre\"=$3,\"Apellido1\"=$4,\"Apellido2\"=$5,\"Correo\" =$6, \"Password\"=$7,\"Rol\"=$8 , \"Username\" =$9 WHERE \"ID\" = $10";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}