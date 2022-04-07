const EmployeeModel = require('../models/Employee')

const TestCtrl = {}

TestCtrl.GetById = (req, res) => {
    res.send('GetById')
}

TestCtrl.Create = async (req, res) => {
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
        next(e)
    }
}

TestCtrl.Update = (req, res) => {
    res.send('working from update')
}

TestCtrl.Delete = (req, res) => {
    res.send('working from delete')
}
TestCtrl.List = (req, res) => {
    res.send('List')
}

module.exports = TestCtrl