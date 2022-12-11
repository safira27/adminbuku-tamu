const express = require("express");
const routerMahasiswa = express.Router()
const controllerMahasiswa = require('../controllers/mahasiswa')

routerMahasiswa.route('/mahasiswa')
    .get(controllerMahasiswa.getMahasiswa)
    .post(controllerMahasiswa.insert)

routerMahasiswa.route('/mahasiswa/:nim')
    .get(controllerMahasiswa.getMahasiswaByNim)
    .put(controllerMahasiswa.update)
    .delete(controllerMahasiswa.delete)

module.exports = routerMahasiswa
