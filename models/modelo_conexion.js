`use strict`

const conexion=require(`./modelo`)

function DAO(){}

DAO.prototype.get=function(callback){
    conexion.query(`SELECT * FROM Movie`,callback)
}
DAO.prototype.getOne=function(id,callback){
    conexion.query(`SELECT * FROM Movie WHERE MovieID = ?;`,id,callback)
}
//-AQUI ABAJO ESTAN LOS METODOS PARA EL VERBO POST Y UPDATE EN METODOS INDIVIDUALES
/*
DAO.prototype.post=function(afiche,callback){
    conexion.query(`INSERT INTO Movie SET ?`,afiche,callback)
}
*/
/*
DAO.prototype.put=function(afiche,callback){
    conexion.query(`UPDATE Movie SET ? WHERE MovieID = ?`,[afiche,afiche.MovieID],callback)
}
*/
DAO.prototype.postOrPut=function(afiche,callback){
    conexion.query(`SELECT * FROM Movie WHERE MovieID = ?`,afiche.MovieID,(err,rows)=>{
        if (err)    return err
        return (rows.length)
            ? conexion.query(`UPDATE Movie SET ? WHERE MovieID = ?`,[afiche,afiche.MovieID],callback)
            : conexion.query(`INSERT INTO Movie SET ?`,afiche,callback)
    })
}
DAO.prototype.delete=function(id,callback){
    conexion.query(`DELETE FROM Movie WHERE MovieID = ?`,id,callback)
}
DAO.prototype.close=function(){
    conexion.end()
}

module.exports = new DAO()