const validateEmployeeInput = require('../validation/employee');
const Employee = require('../models/EmployeeModel');

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createEmployee = async (req, res) => {
    const { errors, isValid } = validateEmployeeInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const newEmployee = new Employee({
        name: req.body.name,
        age: req.body.age,
        salary: req.body.salary
    });

    try {
        await newEmployee.save()
        res.status(200).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateEmployee = async (req, res) => {
    const employeeFields = {};
    if (req.body.name) employeeFields.name = req.body.name;
    if (req.body.age) employeeFields.age = req.body.age;
    if (req.body.salary) employeeFields.salary = req.body.salary;

    const employee = Employee.findOne({ _id: req.params.id });

    if (employee) {
        try {
            await Employee.findOneAndUpdate(
                { _id: req.params.id },
                { $set: employeeFields },
                { new: true }
            );
            res.json({ message: "Employee updated successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({ message: "Employee not found" });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndRemove({ _id: req.params.id });
        res.json({ message: "Employee deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getEmployee, createEmployee, updateEmployee, deleteEmployee };