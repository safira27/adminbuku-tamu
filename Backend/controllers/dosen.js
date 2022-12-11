const res = require('express/lib/response')
const Dosen = require('../models/dosen')

module.exports = {

    getDosen: (req, res) => {
        Dosen.getDosen((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Terjadi Error",
                });
            } else {
                res.send(data);
            }
        })
    },

    insert : (req,res)=>{
        //Ambil data request dari front end
        if (!req.body) {
            res.status(400).send({message : "Data tidak boleh kosong"})
        }
    Dosen.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data)
        }
    })},

    getDosenByNidn : (req,res)=>{
        Dosen.getDosenByNidn(req.params.nidn,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `Dosen dengan Nidn ${req.params.nidn} tidak di temukan`
                })
            }
            else{
                res.status(500).send({
                    message : "Data tidak tersedia"
                })
            }
           }
           else{
               res.send(data)
           }
        }) 
    },

    update : (req,res)=>{
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be  empty"
            });
        }
        Dosen.update(req.params.nidn,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Dosen dengan Nidn ${req.params.nidn} tidak di temukan`
                    })
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    })
                }
               }
               else{
                   res.send(data)
               }    
        })
    },

    delete : (req,res)=>{
        Dosen.delete(req.params.nidn,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `Dosen dengan Nidn ${req.params.nidn} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `Dosen sudah di hapus`});
               }            
        });
    }
}