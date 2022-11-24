//importan funciones
const {Router} = require('express');
//const pool = requiere('../database');
const encriptar = require('../extra_f');
const filterAlpha = require('../extra_f');
const request = require("supertest");
const app = require("../index");


describe("Pruebas unitarias", () =>{

    test("Encriptacion password",() => {
        var val = encriptar.encriptar('password','dwiheded');
        expect(val).toBe("2336deceb511ea5d482d57c6382d13409342942db5be3d3ad2ba05f1d56f7826")
    })

    test("Comprobacion alfanumerica del password",() => {
        var val1 = filterAlpha.filterAlpha("cosita linda 00");
        expect(val1).toBe(false)
    })

    //test("Comprobacion fecha torneo",() => {
    //    var val1 = filterAlpha.Comparar_fechas_partido("2022-12-03T06:00:00.000Z","2022-11-30T06:00:00.000Z","2022-12-30T06:00:00.000Z");
    //    expect(val1).toBe("si")
    /////})
    

    test("Comprobacion formato correo",() => {
        var val1 = filterAlpha.validacion_correo_formato("costena@gmail.com");
        expect(val1).toBe(true)
    })

//------------------------------------------------------------------------
    test("Get club",async() => {
        const response = await request(app).get("/api/clubes/").send({Test:"si"});
        expect(response.statusCode).toBe(200);
    })

    test("Get id club",async() => {
        const response = await request(app).get("/api/clubes/00").send({Test:"si"});
        expect(response.statusCode).toBe(200);
    })

    test("Post club",async() => {
        const response = await request(app).post("/api/clubes/")
        .send({

            Club: "Guadalupe",
            Test:"si"

      });
        expect(response.statusCode).toBe(200);
    })

    test("Put club",async() => {
        const response = await request(app).put("/api/clubes/00")
        .send({

            Club: "Guadalupe2",
            Test:"si"
      });
        expect(response.statusCode).toBe(200);
    })

    test("Remove club",async() => {
        const response = await request(app).get("/api/clubes/00").send({Test:"si"});
        expect(response.statusCode).toBe(200);
    })

//--------------------------------------------------------------------


test("Get jugadores_club",async() => {
    const response = await request(app).get("/api/jugadores_club/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id jugadores_club",async() => {
    const response = await request(app).get("/api/jugadores_club/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post jugadores_club",async() => {
    const response = await request(app).post("/api/jugadores_club/")
    .send({
        Club: "Heredia",
        Nombre_Jugador: "Brandon",
        Apellido1_Jugador: "Soto",
        Apellido2_Jugador: " Perez ",
        Test:"si"
  });
    expect(response.statusCode).toBe(200);
})

test("Put jugadores_club",async() => {
    const response = await request(app).put("/api/jugadores_club/1")
    .send({
        Club: "Heredia",
        Nombre_Jugador: "Carlos",
        Apellido1_Jugador: "Soto",
        Apellido2_Jugador: " Perez ",
        Test:"si"
  });
    expect(response.statusCode).toBe(200);
})

test("Remove jugadores_club",async() => {
    const response = await request(app).get("/api/jugadores_club/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

//-------------------------------------------------------------------


test("Get jugadores_seleccion",async() => {
    const response = await request(app).get("/api/jugadores_seleccion/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id jugadores_seleccion",async() => {
    const response = await request(app).get("/api/jugadores_seleccion/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post jugadores_seleccion",async() => {
    const response = await request(app).post("/api/jugadores_seleccion/")
    .send({
        Seleccion: "Francia",
        Nombre_Jugador: "Brandon",
        Apellido1_Jugador: "Soto",
        Apellido2_Jugador: " Perez ",
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Put jugadores_seleccion",async() => {
    const response = await request(app).put("/api/jugadores_seleccion/1")
    .send({
        Seleccion: "Francia",
        Nombre_Jugador: "Carlos",
        Apellido1_Jugador: "Soto",
        Apellido2_Jugador: " Perez ",
        Test:"si"
  });
    expect(response.statusCode).toBe(200);
})

test("Remove jugadores_seleccion",async() => {
    const response = await request(app).get("/api/jugadores_seleccion/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
//-------------------------------------------------------------------------------

test("Get selecciones",async() => {
    const response = await request(app).get("/api/selecciones/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id selecciones",async() => {
    const response = await request(app).get("/api/selecciones/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post selecciones",async() => {
    const response = await request(app).post("/api/selecciones/")
    .send({

        Seleccion: "Holanda",
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Put selecciones",async() => {
    const response = await request(app).put("/api/selecciones/1")
    .send({

        Seleccion: "Holanda2",
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Remove selecciones",async() => {
    const response = await request(app).get("/api/selecciones/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

//--------------------------------------------------------------------

test("Get paises_fifa",async() => {
    const response = await request(app).get("/api/paises_fifa/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post paises_fifa",async() => {
    const response = await request(app).post("/api/paises_fifa/")
    .send({

        Nombre: "Holanda",
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Remove paises_fifa",async() => {
    const response = await request(app).get("/api/paises_fifa/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

//-----------------------------------------------------------------

test("Get quinielas",async() => {
    const response = await request(app).get("/api/quinielas/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id quinielas",async() => {
    const response = await request(app).get("/api/quinielas/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
test("Get nombre torneo quinielas",async() => {
    const response = await request(app).get("/api/quinielas/Libertadores").send({Test:"si"});
})
test("Post quinielas",async() => {
    const response = await request(app).post("/api/quinielas/")
    .send({

        id_Usuario:9,
        id_Partido :9,
        id_Jugadores_goles_Eq1:[8,9],
        id_Jugadores_asistencias_Eq1:[6,7],
        id_Jugador_GOAT :3,
        Goles_Eq1 :2,
        Goles_Eq2 :2,
        id_Jugadores_goles_Eq2:[3,3],
        id_Jugadores_asistencias_Eq2: [1,2],
        Autogoles_eq1:0,
        Autogoles_eq2:0,
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Put quinielas",async() => {
    const response = await request(app).put("/api/quinielas/3")
    .send({

        id_Usuario:9,
        id_Partido :9,
        id_Jugadores_goles_Eq1:[8,9,10],
        id_Jugadores_asistencias_Eq1:[6,7],
        id_Jugador_GOAT :3,
        Goles_Eq1 :3,
        Goles_Eq2 :2,
        id_Jugadores_goles_Eq2:[3,3],
        id_Jugadores_asistencias_Eq2: [1,2],
        Autogoles_eq1:0,
        Autogoles_eq2:0,
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Remove quinielas",async() => {
    const response = await request(app).get("/api/quinielas/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

//-----------------------------------------------------------------

test("Get partido",async() => {
    const response = await request(app).get("/api/partido/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id partido",async() => {
    const response = await request(app).get("/api/partido/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post partido",async() => {
    const response = await request(app).post("/api/partido/")
    .send({

        Fecha: "2022-11-01T06:00:00.000Z",
        Hora: "10:10:00",
        Nombre_Torneo: "Libertadores",
        Fase: "Octavos",
        Equipo_1: "Francia",
        Equipo_2: "Colombia",
        Sede: "Estadio Nacional Costa Rica",
        Estado_del_partido: "Pendiente",
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Put partido",async() => {
    const response = await request(app).put("/api/partido/3")
    .send({

        Fecha: "2022-11-01T06:00:00.000Z",
        Hora: "10:10:00",
        Nombre_Torneo: "Libertadores",
        Fase: "Octavos",
        Equipo_1: "Francia",
        Equipo_2: "Colombia",
        Sede: "Estadio Nacional Costa Rica 2",
        Estado_del_partido: "Pendiente",
        Test:"si"
  });
    expect(response.statusCode).toBe(200);
})

test("Remove partido",async() => {
    const response = await request(app).get("/api/partido/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})


//-----------------------------------------------------------------

test("Get ranking",async() => {
    const response = await request(app).get("/api/ranking/").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Get id ranking",async() => {
    const response = await request(app).get("/api/ranking/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("Post ranking",async() => {
    const response = await request(app).post("/api/ranking/")
    .send({

        id_Torneo: "WQLP3a",
        id_Usuario: "9",
        Puntaje: 454,
        Test:"si"

  });
    expect(response.statusCode).toBe(200);
})

test("Put ranking",async() => {
    const response = await request(app).put("/api/ranking/3")
    .send({

        id_Torneo: "WQLP3a",
        id_Usuario: "9",
        Puntaje: 500,
        Test:"si"
  });
    expect(response.statusCode).toBe(200);
})

test("Remove ranking",async() => {
    const response = await request(app).get("/api/ranking/3").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

//===================================================================================
test("GET torneo_equipo",async() => {
    const response = await request(app).get("/api/torneo_equipo").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
test("GET torneo_equipo especifica",async() => {
    const response = await request(app).get("/api/torneo_equipo/1").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("POST torneo_equipo ",async() => {
    const response = await request(app).post("/api/torneo_equipo/").send({
        "id": "2",
        "Torneo": "Libertadores",
        "Equipo": "Cartago"  ,
        Test:"si"
    });
    expect(response.statusCode).toBe(200);
})

test("PUT torneo_equipo especifica",async() => {
    const response = await request(app).patch("/api/torneo_equipo/1").send({
        "Equipo": "Belen" ,
        "Test":"si"  
    });
    expect(response.statusCode).toBe(200);
})
test("DELETE torneo_equipo especifica",async() => {
    const response = await request(app).delete("/api/torneo_equipo/EiOASj").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
//===================================================================================
test("GET torneo_fase",async() => {
    const response = await request(app).get("/api/torneo_fase").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
test("GET torneo_fase especifica",async() => {
    const response = await request(app).get("/api/torneo_fase/2").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("POST torneo_fase ",async() => {
    const response = await request(app).post("/api/torneo_fase/").send({
        "id": "2",
        "Torneo": "Libertadores",
        "Fase": "Final",
        "Test":"si"  
    });
    expect(response.statusCode).toBe(200);
})

test("PUT torneo_fase especifica",async() => {
    const response = await request(app).patch("/api/torneo_fase/2").send({
        "Torneo": "Libertadores",
        "Fase": "Semifinal",
        "Test":"si"   
    });
    expect(response.statusCode).toBe(200);
})
test("DELETE torneo_fase especifica",async() => {
    const response = await request(app).delete("/api/torneo_fase/2").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
//===================================================================================
test("GET torneo",async() => {
    const response = await request(app).get("/api/torneo").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
test("GET torneo especifica",async() => {
    const response = await request(app).get("/api/torneo/EiOASj").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("POST torneo ",async() => {
    const response = await request(app).post("/api/torneo/").send({
    "ID": "2",
    "Nombre": "Copa del Mundo",
    "Fecha_inicio": "2020-10-31T06:00:00.000Z",
    "Fecha_fin": "2020-12-31T06:00:00.000Z",
    "Equipos": "Seleccion",
    "Reglas": "fkwhfibjebvjdsbvs"  ,
    "Test":"si"  
    });
    expect(response.statusCode).toBe(200);
})

test("PUT torneo especifica",async() => {
    const response = await request(app).patch("/api/torneo/EiOASj").send({
        "Nombre": "Copa del Mundo",
        "Fecha_inicio": "2020-10-31T06:00:00.000Z",
        "Fecha_fin": "2020-12-31T06:00:00.000Z",
        "Equipos": "Seleccion",
         "Reglas": "sasasss"  ,
        "Test":"si"  
    });
    expect(response.statusCode).toBe(200);
})
test("DELETE torneo especifica",async() => {
    const response = await request(app).delete("/api/torneo/EiOASj").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
//===================================================================================
test("GET usuarios",async() => {
    const response = await request(app).get("/api/usuarios").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
test("GET usuarios especifica",async() => {
    const response = await request(app).get("/api/usuarios/8").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})

test("POST usuarios ",async() => {
    const response = await request(app).post("/api/usuarios/").send({
    "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
    "Nombre": "Leo",
    "Apellido1": "Alvarez",
    "Pais": "Japón",
    "Correo": "cocwjqws@qasu.com",
    "Password": "sss20",
    "Username": "new22" ,
    "Test":"si" 
    });
    expect(response.statusCode).toBe(200);
})

test("PUT usuarios especifica",async() => {
    const response = await request(app).patch("/api/usuarios/8").send({
        "Fecha_Nacimiento": "2022-10-31T06:00:00.000Z",
        "Nombre": "Leo",
        "Apellido1": "Alvarez22",
        "Pais": "Japón",
        "Correo": "cocwjqws@qasu.com",
        "Password": "sss20",
        "Username": "new22" ,
        "Test":"si"    
    });
    expect(response.statusCode).toBe(200);
})
test("DELETE usuarios especifica",async() => {
    const response = await request(app).delete("/api/usuarios/8").send({Test:"si"});
    expect(response.statusCode).toBe(200);
})
//===================================================================================
});

