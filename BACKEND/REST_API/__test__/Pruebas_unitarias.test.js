//importan funciones
const {Router} = require('express');
const controller = require('../src/Controllers/controller_torneo');
const encriptar = require('../extra_f');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



describe("Pruebas unitarias", () =>{

    test("Suma 2 numeros",() => {
        var val = encriptar('password','dwiheded');
        expect(val).toBe("JHFwaY")
    })

    test("Get funcion",() => {
        
    })

});