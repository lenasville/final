const express = require('express');
const router = express.Router();
const controller = require('../controllers/analytics');

//localhost:3000/api/auth/login
router.get('/overview', controller.overview);
//localhost:3000/api/auth/register
router.get('/analytics', controller.analytics);





module.exports = router;