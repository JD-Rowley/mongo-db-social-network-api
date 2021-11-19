const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    createReaction,
    deleteReaction,
    deleteThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById);

router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/reactionId')
    .delete(deleteReaction);

module.exports = router;