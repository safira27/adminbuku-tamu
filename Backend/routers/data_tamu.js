const express = require("express");
const routerData_tamu = express.Router()
const controllerData_tamu = require('../controllers/data_tamu')

routerData_tamu.route('/data_tamu')
    .get(controllerData_tamu.getData_tamu)
    .post(controllerData_tamu.insert)

routerData_tamu.route('/data_tamu/:kode_tamu')
    .put(controllerData_tamu.update)
    .delete(controllerData_tamu.delete)
    .get(controllerData_tamu.getData_tamuByKode_tamu)

    module.exports = routerData_tamu