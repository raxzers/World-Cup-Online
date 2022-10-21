const get = "SELECT * FROM public.Partido";
const getById = "SELECT ID,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Equipo_2,Sede,Estado_del_partido WHERE ID = $1";
const checkIdExists = "SELECT U FROM public.Partido U WHERE U.ID = $1";
const add = "INSERT INTO public.Partido (SELECT ID,Fecha,Hora,Nombre_Torneo,Fase,Equipo_1,Equipo_2,Sede,Estado_del_partido VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)";
const remove = "DELETE FROM public.Partido WHERE ID = $1";
const update = "UPDATE public.Partido SET ID=$1,Fecha=$2,Hora=$3,Nombre_Torneo=$4,Fase=$5,Equipo_1=$6,Equipo_2=$7,Sede=$8,Estado_del_partido=$9 WHERE ID = $10";

module.exports = {
    get,
    getById,
    checkIdExists,
    add,
    remove,
    update,
}