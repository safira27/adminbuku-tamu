const res = require('express/lib/response')
const Nilai = require('../models/nilai')

module.exports = {
    getNilai: (req, res) => {
        Nilai.getNilai((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },
    getNilaiByNim: (req, res) => {
        Nilai.getNilaiByNim(req.params.nim, (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                    });
                } else {
                    res.status(500).send({
                        nilai: []
                    });
                }
            } else {
                res.send(data);
            }
        });
    },
    insert: (req, res) => {
        //Ambil data request dari front end
        if (!req.body) {
            res.status(400).send({
                message: "Data tidak boleh kosong"
            })
        }
        console.log(req.body)
        Nilai.insert(req.body, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error"
                })
            } else {
                res.send(data)
            }
        })
    },

    getNilaiByNim: (req, res) => {
        Nilai.getNilaiByNim(req.params.nim, (err, data) => {
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message: `Mahasiswa dengan Nim ${req.params.nim} tidak di temukan`
                    });
                } else {
                    res.status(500).send({
                        nilai: []
                    });
                }
            } else {
                res.send(data);
            }
        });
    }
}