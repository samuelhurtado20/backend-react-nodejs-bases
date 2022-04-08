const EmployeeModel = require('../models/Employee')

const EmployeeCtrl = {}

EmployeeCtrl.GetById = async (req, res) => {
    let id = req.query._id;
    try {
        const data = await EmployeeModel.findOne({_id: id})
        if (!data) {
            res.status(404).send({
                message: "Error el achivo no existe"
            })
        } else {
            res.status(200).json(data)
        }
    } catch (e) {
        res.status(500).send({
            message: "unexpected error"
        })
    }
}///usr/local/bin is in your $PATH.

EmployeeCtrl.Create = async (req, res) => {
    const { name, lastName, salary } = req.body;
    try {
        const data = new EmployeeModel({
            name,
            lastName,
            salary
        })
        data.save(function (err) {
            if (err) return handleError(err);
            res.status(200).json(data)
          });
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso TestCtrl.Create"
        })
    }
}

EmployeeCtrl.Update = async (req, res) => {
    let id = req.query._id;
    const { name, lastName, salary } = req.body;
    try {
        const data = await EmployeeModel.findByIdAndUpdate({_id: id}, {
            name,
            lastName,
            salary
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
    }
}

EmployeeCtrl.Delete = async (req, res) => {
    let id = req.query._id;
    try {
        const data = await EmployeeModel.findByIdAndDelete({_id: id})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
    }
}

EmployeeCtrl.List = (req, res) => {
    res.send('List')
}

module.exports = EmployeeCtrl