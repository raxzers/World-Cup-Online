const get = "SELECT * FROM public.\"Ranking_privado\"";
const getById = "SELECT \"Id_comunidad\",\"Id_usuario\" FROM public.\"Ranking_privado\" WHERE \"Id_comunidad\" = $1";
const checkIdExists = "SELECT \"Id_usuario\" FROM public.\"Ranking_privado\" WHERE \"Id_usuario\" = $1";/*revisar */
const add = "INSERT INTO public.\"Ranking_privado\" (\"Id_usuario\",\"Id_comunidad\") VALUES ((select \"ID\" from public.\"Usuarios\" WHERE public.\"Usuarios\".\"Username\" = $1),(select \"ID\" from public.\"Comunidad_Privada\"  cp where cp.\"COD_Invita\" = $2))";
const remove = "DELETE FROM public.\"Ranking\" WHERE \"Id\" = $1";
const update = "UPDATE public.\"Ranking_privado\" SET \"Id_Torneo\"= (select \"ID\" from public.\"Torneo\" where public.\"Torneo\".\"Nombre\" = $2),\"Id_usuario\"=(select \"ID\" from public.\"Usuarios\ WHERE public.\"Usuarios\".\"Username\" = $1), WHERE \"Id_usuario\" = $3";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}

/*
SELECT CP.\"Nombre\",U.\"Username\",R.\"Puntaje\"
	FROM public.\"Ranking_privado\" AS RP
	JOIN public.\"Comunidad_Privada\" AS CP ON CP.\"ID\" = RP.\"Id_comunidad\"
	JOIN public.\"Usuarios\" AS U ON U.\"ID\" = RP.\"Id_usuario\"
	JOIN public.\"Ranking\" AS R on R.\"id_Usuario\" =U.\"ID\" 
    WHERE CP.\"Nombre\"= $1 ORDER BY R.\"Puntaje\" ASC;
*/