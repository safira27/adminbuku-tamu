const express = require("express");
const routerDosen = express.Router()
const controllerDosen = require('../controllers/dosen')

routerDosen.route('/dosen')
    .get(controllerDosen.getDosen)
    .post(controllerDosen.insert)

routerDosen.route('/dosen/:nidn')
    .put(controllerDosen.update)
    .delete(controllerDosen.delete)
    .get(controllerDosen.getDosenByNidn)

    module.exports = routerDosen