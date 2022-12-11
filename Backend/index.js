const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const routerMahasiswa = require('./routers/mahasiswa')
const routerNilai = require('./routers/nilai')
const routerData_tamu = require('./routers/data_tamu')

//untuk menerima req.body
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(cors({
    origin: '*'
}));

app.get('/about',(req,res)=>{
    res.send('About')
})

app.use(routerData_tamu)
app.use(routerMahasiswa)
app.use(routerNilai)

app.listen(port, ()=>{
    console.log('server berjalan pada port ' + port)
})