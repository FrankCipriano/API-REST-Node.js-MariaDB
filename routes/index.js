`use strict`

const controller=require(`../controllers/c_index`)
    express=require(`express`),
    router=express.Router()


router.get(`/`,controller.get)
.get(`/agregar`,controller.generarFormulario)
.post(`/`,controller.postOrPut)
//.post(`/`,controller.post)
.get(`/editar/:MovieID`,controller.getOne)
.put(`/actualizar/:MovieID`,controller.postOrPut)
//.put(`/actualizar/:MovieID`,controller.put)
.delete(`/eliminar/:MovieID`,controller.delete)
.use(controller.error404)//-MIDDLEWARE PARA ERRORES

module.exports=router