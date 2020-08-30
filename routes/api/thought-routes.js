// import express and controller functions
const router = require('express').Router();
const {
    addThought,
    deleteThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    addReaction,
    deleteReaction
  } = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);
  
  // api/thoughts/:id
  router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought)
  .post(addReaction);

// api/thoughts/:id/reactions/:id
router
.route('/:id/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;