const express = require("express");
const rankingRoutes = require('./src/Routes/routes_ranking');
const rankingPrivRoutes = require('./src/Routes/routes_ranking_privado');
const clubesRoutes = require('./src/Routes/routes_clubes');
const comunidadRoutes = require('./src/Routes/routes_comunidad_privada');
const jugadores_clubRoutes = require('./src/Routes/routes_jugadores_club');
const jugadores_seleccionRoutes = require('./src/Routes/routes_jugadores_seleccion');
const partidoRoutes = require('./src/Routes/routes_partido');
const seleccionesRoutes = require('./src/Routes/routes_selecciones');
const torneoRoutes = require('./src/Routes/routes_torneo');
const torneo_equipoRoutes = require('./src/Routes/routes_torneo_equipos');
const torneo_faseRoutes = require('./src/Routes/routes_torneo_fase');
const torneo_sedeRoutes = require('./src/Routes/routes_torneo_sede');
const usuarios = require('./src/Routes/routes_usuarios');
const quinielas = require('./src/Routes/routes_quinielas');
const paises_fifa = require('./src/Routes/routes_paises_fifa');

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

  app.use('/api/clubes', clubesRoutes );
  app.use('/api/jugadores_club', jugadores_clubRoutes );
  app.use('/api/jugadores_seleccion', jugadores_seleccionRoutes );
  app.use('/api/partido', partidoRoutes);
  app.use('/api/selecciones', seleccionesRoutes);
  app.use('/api/torneo', torneoRoutes );
  app.use('/api/torneo_equipo', torneo_equipoRoutes);
  app.use('/api/torneo_fase', torneo_faseRoutes );
  app.use('/api/torneo_sede', torneo_sedeRoutes );
  app.use('/api/ranking', rankingRoutes );
  app.use('/api/usuarios', usuarios );
  app.use('/api/quinielas', quinielas );
  app.use('/api/paises_fifa', paises_fifa );
  app.use ('/api/comunidad_privada',comunidadRoutes);
  app.use ('/api/ranking_privado',rankingPrivRoutes);

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (consulta, respuesta) => {
    respuesta.send('WORLD CUP ONLINE API (1)');
});

module.exports = app;