const {Router}  = require('express')
const route     = Router()
const TestCtrl  = require('../controllers/test.controller')

route.get('/', TestCtrl.GetById)
route.post('/create', TestCtrl.Create)
route.put('/update', TestCtrl.Update)
route.delete('/delete', TestCtrl.Delete)
route.get('/list', TestCtrl.List)

module.exports = route