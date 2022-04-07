// import { Schema, model } from 'mongoose';

const { default: mongoose } = require("mongoose");

// const EmployeeSchema = new Schema({
//     //type:       {type:Schema.ObjectId, ref:'typeschema'},
//     name: { type: String, maxlength: 60, unique: true, required: true },
//     lastName: { type: String, maxlength: 60, unique: true, required: true },
//     salary: { type: Number, required: true, default: 0 },
//     state: { type: Number, default: 1 },
//     createAt: { type: Date, default: Date.now }
// })

// const Employee = model('employeeschema', EmployeeSchema);
// export default Employee;


const schema = new mongoose.Schema({ name: 'string', lastName: 'string', salary: 'number' });
const Employee = mongoose.model('Employee', schema);

module.exports = Employee