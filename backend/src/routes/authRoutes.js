const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.post('/', authControllers.authEmployee);

module.exports = router;
