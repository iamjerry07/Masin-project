const express = require('express');
const { getProfile, getAllUsers } = require('../controllers/userController');
const { authRequired, requireRole } = require('../middlewares/authMiddleware');


const router = express.Router();


router.get('/profile/:id', authRequired, getProfile);
router.get('/admin/users', authRequired, requireRole('Admin'), getAllUsers);


module.exports = router;