const get = "SELECT * FROM public.\"Ranking\"";
const getById = "SELECT * FROM public.\"Ranking\" WHERE \"Id\" = $1";
const checkIdExists = "SELECT * FROM public.\"Ranking\" WHERE \"Id\" = $1";
const add = "INSERT INTO public.\"Ranking\" (\"Id\",\"Torneo\",\"Username\",\"Puntaje\") VALUES ($1, $2 , $3 , $4)";
const remove = "DELETE FROM public.\"Ranking\" WHERE \"Id\" = $1";
const update = "UPDATE public.\"Ranking\" SET \"Id\"= $1 ,\"Torneo\"= $2 ,\"Username\"= $3 ,\"Puntaje\"= $4 WHERE \"Id\" = $5";


module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}