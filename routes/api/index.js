// import express and route files
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/users` to user routes`
router.use('/users', userRoutes);

// add prefix of '/thoughts' to thought routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;