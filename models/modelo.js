`use strict`

const mysql=require(`mysql`),
    db_options=require(`./dboptions.json`),
    myConnetion=mysql.createConnection(db_options)

myConnetion.connect((error)=>{
    if (error) return console.log(`Error al conectarse con la Base de Datos ${error}`)
})

module.exports=myConnetion