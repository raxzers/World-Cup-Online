const get = "SELECT * FROM public.\"Comunidad_Privada\"";
const getById = "SELECT \"ID\",\"Nombre\" FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const checkUserYTorneo ="SELECT rp.\"Id_comunidad\" FROM public.\"Ranking_privado\" rp LEFT JOIN public.\"Comunidad_Privada\" cp ON cp.\"ID\" = rp.\"Id_comunidad\" WHERE  cp.\"id_Torneo\"= (SELECT \"ID\" FROM public.\"Torneo\" tn WHERE tn.\"Nombre\" =$1) AND rp.\"Id_usuario\" = (select \"ID\" from public.\"Usuarios\" u where u.\"Username\" = $2);";
const checkIdExists = "SELECT \"Nombre\" FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const add = "INSERT INTO public.\"Comunidad_Privada\"( \"Nombre\", \"COD_Invita\", \"id_Torneo\")VALUES ($1, $2, (select \"ID\" from public.\"Torneo\" where public.\"Torneo\".\"Nombre\" = $3));";
const remove = "DELETE FROM public.\"Comunidad_Privada\" WHERE \"ID\" = $1";
const update = "UPDATE public.\"Comunidad_Privada\" SET \"ID\"=$1,\"Nombre\"= $2,\"COD_Invita\"=$3,\"id_Torneo\"=(select \"ID\" from public.\"Torneo\" where public.\"Torneo\".\"Nombre\" = $4) WHERE \"ID\" = $5";

module.exports = {
    get,
    getById,
    checkUserYTorneo,
    checkIdExists,
    add,
    remove,
    update,
}