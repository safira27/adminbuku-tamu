const res = require('express/lib/response')
const Data_tamu = require('../models/data_tamu')

module.exports = {

    getData_tamu: (req, res) => {
        Data_tamu.getData_tamu((err, data) => {
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
    Data_tamu.insert(req.body,(err,data) =>{
        if (err) {
            res.status(500).send({
                message : err.message || "Terjadi Error"
            })
        }else{
            res.send(data)
        }
    })},

    getData_tamuByKode_tamu : (req,res)=>{
        Data_tamu.getData_tamuByKode_tamu(req.params.kode_tamu,(err,data)=>{
           if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message : `tamu dengan kode ${req.params.kode_tamu} tidak di temukan`
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
        Data_tamu.update(req.params.kode_tamu,req.body,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `tamu dengan kode ${req.params.kode_tamu} tidak di temukan`
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
        Data_tamu.delete(req.params.kode_tamu,(err,data)=>{
            if (err) {
                if (err.kind === 'not_found') {
                    res.status(404).send({
                        message : `tamu dengan kode ${req.params.kode_tamu} tidak di temukan`
                    });
                }
                else{
                    res.status(500).send({
                        message : "Data tidak tersedia"
                    });
                }
               }
               else{
                   res.send({message: `data tamu sudah di hapus`});
               }            
        });
    }
}