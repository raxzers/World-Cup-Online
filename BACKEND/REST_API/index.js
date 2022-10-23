const express = require("express");
const usuarioRoutes = require('./src/usuario/routes');
const equipoRoutes = require('./src/equipo/routes');
const clubesRoutes = require('./src/clubes/routes');
const jugadores_clubRoutes = require('./src/jugadores_club/routes');
const jugadores_seleccionRoutes = require('./src/jugadores_seleccion/routes');
const partidoRoutes = require('./src/partido/routes');
const seleccionesRoutes = require('./src/selecciones/routes');
const torneoRoutes = require('./src/torneo/routes');
const torneo_equipoRoutes = require('./src/torneo_equipos/routes');
const torneo_faseRoutes = require('./src/torneo_fase/routes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next();
  });

app.use('/api/usuario', usuarioRoutes);
app.use('/api/equipo', equipoRoutes);
app.use('/api/clubes', clubesRoutes );
app.use('/api/jugadores_club', jugadores_clubRoutes );
app.use('/api/jugadores_seleccion', jugadores_seleccionRoutes );
app.use('/api/partido', partidoRoutes);
app.use('/api/selecciones', seleccionesRoutes);
app.use('/api/torneo', torneoRoutes );
app.use('/api/torneo_equipo', torneo_equipoRoutes);
app.use('/api/torneo_fase', torneo_faseRoutes );



app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
    respuesta.send('WORLD CUP ONLINE API');
});