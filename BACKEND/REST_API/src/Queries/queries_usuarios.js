const get = "SELECT * FROM public.\"Usuarios\"";
const getById = "SELECT * FROM public.\"Usuarios\" WHERE \"ID\" = $1";
const getByusername = "SELECT * FROM public.\"Usuarios\" WHERE \"Username\" = $1";
const checkIdExists = "SELECT * FROM public.\"Usuarios\"  WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Usuarios\" ( \"Fecha_Nacimiento\",\"Nombre\",\"Apellido1\",\"Correo\",\"Password\",\"Rol\",\"Username\",\"Pais\") VALUES ($1,$2,$3,$4,$5,'user',$6,$7)";
const remove = "DELETE FROM public.\"Usuarios\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Usuarios\" SET \"ID\" = $1, \"Fecha_Nacimiento\"=$2,\"Nombre\"=$3,\"Apellido1\"=$4,\"Correo\" =$5, \"Password\"=$6,\"Rol\"=$7 , \"Username\" =$8 ,\"Pais\"=$9 WHERE \"ID\" = $10";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
    getByusername,
}