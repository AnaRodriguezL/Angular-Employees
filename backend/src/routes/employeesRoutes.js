const express = require('express');
const router = express.Router();
const employeesControllers = require('../controllers/employeesControllers');

// Operations CRUD
router.get('/', employeesControllers.listEmployees);
router.get('/:id', employeesControllers.getEmployee);
router.post('/', employeesControllers.registerEmployee);
router.put('/:id', employeesControllers.editEmployee);
router.delete('/:id', employeesControllers.deleteEmployee);

module.exports = router;

