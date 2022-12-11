const res = require("express/lib/response");
const dbConfig = require("../config/db.config");
const data_tamu = require("../controllers/data_tamu");
const sql = require("./db")


module.exports = {
     insert : (data_tamuBaru,result) => {
       sql.query("insert into data_tamu SET ?",data_tamuBaru,(err,res)=>{
           if (err) {
               console.log("error",err);
               result(err,null)
               return;
           }
           result(null, {id: res.insertId, ...data_tamuBaru});
       })
    },

    getData_tamu : (result) =>{
        let query = "Select * From data_tamu";
        sql.query(query,(err,res)=>{
            if (err) {
                console.log("error",err);
                result(null,err);
                return;
            }
            result(null,res)
        })
    },

    getData_tamuByKode_tamu : (kode_tamu, result) =>{
        let query = `Select * From data_tamu Where kode_tamu =${kode_tamu}`;
        console.log(kode_tamu)
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
    update:(kode_tamu,data_tamu,result)=>{
        sql.query(
            "UPDATE data_tamu SET nama = ? WHERE kode_tamu = ?",
            [data_tamu.nama, kode_tamu],
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
                console.log("updated data_tamu : ",{kode_tamu: kode_tamu, ...data_tamu});
                result(null,{kode_tamu: kode_tamu, ...data_tamu});   
            }
        )
    },
    delete: (kode_tamu, result) =>{
        sql.query("DELETE FROM data_tamu WHERE kode_tamu = ?", kode_tamu,(err,res)=>{
            if (err) {
                console.log("error : ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                result({kind : "not_found"},null);
                return;
            }
            console.log("deleted data_tamu with kode_tamu : ",kode_tamu);
            result(null,res);
        });
    },
}