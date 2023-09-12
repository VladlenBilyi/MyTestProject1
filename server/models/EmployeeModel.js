const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);