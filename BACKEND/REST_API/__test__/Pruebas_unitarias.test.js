//importan funciones
const {Router} = require('express');
const controller = require('../src/Controllers/controller_torneo');
const encriptar = require('../extra_f');
const Comparar_fechas_torneo = require('../extra_f');
const filterAlpha = require('../extra_f');
const express = require("express");
const pool = require("../database");


describe("Pruebas unitarias", () =>{

    test("Encriptacion password",() => {
        var val = encriptar.encriptar('password','dwiheded');
        expect(val).toBe("2336deceb511ea5d482d57c6382d13409342942db5be3d3ad2ba05f1d56f7826")
    })

    test("Comprobacion alfanumerica del password",() => {
        var val1 = filterAlpha.filterAlpha("cosita linda 00");
        expect(val1).toBe(false)
    })

    test("Comprobacion fecha torneo",() => {
        var val1 = filterAlpha.Comparar_fechas_torneo("2022-11-30T06:00:00.000Z","2022-12-30T06:00:00.000Z");
        expect(val1).toBe(false)
    })
    

    test("Comprobacion formato correo",() => {
        var val1 = filterAlpha.validacion_correo_formato("costena@gmail.com");
        expect(val1).toBe(true)
    })
});

