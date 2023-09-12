const express = require('express');
const router = express.Router();

const { getEmployee, createEmployee, updateEmployee, deleteEmployee } = require('../Controllers/employeeController');

router.get('/', getEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;