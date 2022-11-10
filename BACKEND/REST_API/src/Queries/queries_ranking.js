const get = "SELECT * FROM public.\"Ranking\"";
const getById = "select r.\"Id\",u.\"Username\",r.\"Puntaje\" from public.\"Ranking\"  r left join public.\"Torneo\" t on t.\"ID\"= r.\"id_Torneo\" left join public.\"Usuarios\" u on u.\"ID\"= r.\"id_Usuario\" where t.\"Nombre\" = $1 order by r.\"Puntaje\" DESC";
const checkIdExists = "SELECT * FROM public.\"Ranking\" WHERE \"Id\" = $1";
const add = "INSERT INTO public.\"Ranking\" (\"id_Torneo\",\"id_Usuario\",\"Puntaje\") VALUES ($1, $2 , $3 )";
const remove = "DELETE FROM public.\"Ranking\" WHERE \"Id\" = $1";
const update = "UPDATE public.\"Ranking\" SET \"Id\"= $1 ,\"id_Torneo\"= $2 ,\"id_Usuario\"= $3 ,\"Puntaje\"= $4 WHERE \"Id\" = $5";


module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}