const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const dosen = require("../controllers/dosen");
const sql = require("./db")


module.exports = {
     insert : (dosenBaru,result) => {
       sql.query("insert into dosen SET ?",dosenBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...dosenBaru});
       })
    },

    getDosen : (result) =>{
        let query = "Select * From dosen";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getDosenByNidn : (nidn, result) =>{
        let query = `Select * From dosen Where nidn =${nidn}`;
        console.log(nidn)
        sql.query(query, (err, res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            if (res.length) {
                result(null,res[0]);
                return
            }
            console.log(res)
            result ({kind : "not_found"},null)
        })
    },
    update:(nidn,dosen,result)=>{
        sql.query(
            "UPDATE dosen SET namadosen = ? WHERE nidn = ?",
            [dosen.namadosen, nidn],
            (err,res) => {
                if (err) {
                    console.log("error",err);
                    result(null,err);
                    return;
                }
                if (res.affectedRows = 0) {
                    result(null, err);
                    return;
                }
                console.log("updated dosen : ",{nidn: nidn, ...dosen});
                result(null,{nidn: nidn, ...dosen});   
            }
        )
    },
    delete: (nidn, result) =>{
        sql.query("DELETE FROM dosen WHERE nidn = ?", nidn,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted dosen with NIDN : ",nidn);
            result(null,res);
        });
    },
}