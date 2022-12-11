const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const nilai = require("../controllers/nilai");
const sql = require("./db")

module.exports = {
    getNilai : (result) =>{
        let query = `SELECT nilai.nim,mahasiswa.nama,matakuliah.kdMk, matakuliah.matakuliah,nilai.dosen,nilai.semester,nilai.nilai 
        FROM matakuliah,nilai,mahasiswa
        WHERE mahasiswa.nim = nilai.nim and matakuliah.kdMk = nilai.kdMk`;
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },
    getNilaiByNim:(nim,result) =>{
        try {
            sql.query(`SELECT  matakuliah.kdMk, matakuliah.matakuliah,nilai.dosen,nilai.semester,nilai.nilai 
            FROM mahasiswa,matakuliah,nilai
            WHERE mahasiswa.nim=${nim} and nilai.nim=${nim} and nilai.kdMk=matakuliah.kdMk`,(err,res) =>
            {
                result(null,res)
            }
            );
        } catch (error) {
            result(error,null)
        }
    },
    insert : (nilaiBaru,result) => {
        sql.query("insert into nilai SET ?",nilaiBaru,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(err,null)
                return;
            }
            result(null, {id: res.insertId, ...nilaiBaru});
        })
    }
}