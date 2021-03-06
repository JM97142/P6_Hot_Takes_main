// Importation modules
const express = require('express');
const router = express.Router();

// Importation controllers
const userCtrl = require('../controllers/user');

// Routes
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;