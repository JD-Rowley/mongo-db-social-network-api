const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
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
    .route('/:userId/:id')
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;