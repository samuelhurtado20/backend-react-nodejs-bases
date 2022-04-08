const {Router}  = require('express')
const route     = Router()
const EmployeeCtrl  = require('../controllers/Employee.controller')

route.get('/', EmployeeCtrl.GetById)
route.post('/create', EmployeeCtrl.Create)
route.put('/update', EmployeeCtrl.Update)
route.delete('/delete', EmployeeCtrl.Delete)
route.get('/list', EmployeeCtrl.List)

module.exports = route