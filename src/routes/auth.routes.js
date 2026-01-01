import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { registerValidationRules, loginValidationRules, handleValidationErrors } from '../middleware/validator.js';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', registerValidationRules(), handleValidationErrors, register);

// @route   POST /api/auth/login
// @desc    Authenticate user and get token
// @access  Public
router.post('/login', loginValidationRules(), handleValidationErrors, login);

export default router;
