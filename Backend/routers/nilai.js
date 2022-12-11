const express = require("express");
const routerNilai = express.Router()
const controllerNilai = require('../controllers/nilai')

routerNilai.route('/nilai')
    .get(controllerNilai.getNilai)
    .post(controllerNilai.insert)

routerNilai.route('/nilai/:nim')
    .get(controllerNilai.getNilaiByNim)

    module.exports = routerNilai