-- Table: public.Torneo

-- DROP TABLE public."Torneo";

CREATE TABLE public."Torneo"
(
    "ID" character varying(6) COLLATE pg_catalog."default" NOT NULL,
    "Nombre" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Fecha_inicio" date NOT NULL,
    "Fecha_fin" date NOT NULL,
    "Equipos" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "Reglas" character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_key PRIMARY KEY ("ID"),
    CONSTRAINT name_unique UNIQUE ("Nombre")
)

TABLESPACE pg_default;

ALTER TABLE public."Torneo"
    OWNER to postgres;
	
--------------------------------------------
-- Table: public.Partido

-- DROP TABLE public."Partido";

CREATE TABLE public."Partido"
(
    "ID" character varying COLLATE pg_catalog."default" NOT NULL,
    "Fecha" date NOT NULL,
    "Hora" time without time zone NOT NULL,
    "Nombre_Torneo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Fase" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    "Equipo_1" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Equipo_2" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Sede" character varying(70) COLLATE pg_catalog."default" NOT NULL,
    "Estado_del_partido" character varying(12) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_keyp PRIMARY KEY ("ID"),
    CONSTRAINT "Name_torneo" FOREIGN KEY ("Nombre_Torneo")
        REFERENCES public."Torneo" ("Nombre") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public."Partido"
    OWNER to postgres;
--------------------------------------------------------
-- Table: public.Selecciones

-- DROP TABLE public."Selecciones";

CREATE TABLE public."Selecciones"
(
    "ID" character varying COLLATE pg_catalog."default" NOT NULL,
    "Seleccion" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Selecciones_pkey" PRIMARY KEY ("ID"),
    CONSTRAINT key_seleccion UNIQUE ("Seleccion")
)

TABLESPACE pg_default;

ALTER TABLE public."Selecciones"
    OWNER to postgres;
-----------------------------------------------------
-- Table: public.Clubes

-- DROP TABLE public."Clubes";

CREATE TABLE public."Clubes"
(
    "ID" character varying COLLATE pg_catalog."default" NOT NULL,
    "Club" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_keyclub PRIMARY KEY ("ID"),
    CONSTRAINT club_unique UNIQUE ("Club")
)

TABLESPACE pg_default;

ALTER TABLE public."Clubes"
    OWNER to postgres;
-------------------------------------------------------------------------
-- Table: public.Jugadores_Club

-- DROP TABLE public."Jugadores_Club";

CREATE TABLE public."Jugadores_Club"
(
    "ID" character varying COLLATE pg_catalog."default" NOT NULL,
    "Club" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Nombre_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    "Apellido1_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    "Apellido2_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_keyjc PRIMARY KEY ("ID"),
    CONSTRAINT key_club FOREIGN KEY ("Club")
        REFERENCES public."Clubes" ("Club") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."Jugadores_Club"
    OWNER to postgres;
--------------------------------------------------------
-- Table: public.Jugadores_Seleccion

-- DROP TABLE public."Jugadores_Seleccion";

CREATE TABLE public."Jugadores_Seleccion"
(
    "ID" character varying COLLATE pg_catalog."default" NOT NULL,
    "Seleccion" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Nombre_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    "Apellido1_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    "Apellido2_Jugador" character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_keyjs PRIMARY KEY ("ID"),
    CONSTRAINT key_seleccionj FOREIGN KEY ("Seleccion")
        REFERENCES public."Selecciones" ("Seleccion") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."Jugadores_Seleccion"
    OWNER to postgres;
---------------------------------------------------
-- Table: public.Torneo_Equipos

-- DROP TABLE public."Torneo_Equipos";

CREATE TABLE public."Torneo_Equipos"
(
    id character varying(6) COLLATE pg_catalog."default" NOT NULL,
    "Torneo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Equipo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_relac_torneo_equipo PRIMARY KEY (id),
    CONSTRAINT "Torneo_nombre" FOREIGN KEY ("Torneo")
        REFERENCES public."Torneo" ("Nombre") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public."Torneo_Equipos"
    OWNER to postgres;
-----------------------------------------------------------------
-- Table: public.Torneo_Fase

-- DROP TABLE public."Torneo_Fase";

CREATE TABLE public."Torneo_Fase"
(
    id character varying(6) COLLATE pg_catalog."default" NOT NULL,
    "Torneo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Fase" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_torneo_fase PRIMARY KEY (id),
    CONSTRAINT torneo FOREIGN KEY ("Torneo")
        REFERENCES public."Torneo" ("Nombre") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public."Torneo_Fase"
    OWNER to postgres;
-----------------------------------------------------------

-- Table: public.Ranking

-- DROP TABLE public."Ranking";

CREATE TABLE public."Ranking"
(
    "Id" character varying COLLATE pg_catalog."default" NOT NULL,
    "Torneo" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Username" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Puntaje" integer NOT NULL,
    CONSTRAINT id_ranking PRIMARY KEY ("Id"),
    CONSTRAINT "Torneo_ranking" FOREIGN KEY ("Torneo")
        REFERENCES public."Torneo" ("Nombre") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public."Ranking"
    OWNER to postgres;