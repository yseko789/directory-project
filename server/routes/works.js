const express = require('express');
const router = express.Router();

const {createWork, getAllWork, getSingleWork, updateWork, deleteWork} = require('../controllers/works');

router.route('/').post(createWork).get(getAllWork);
router.route('/:id').get(getSingleWork).patch(updateWork).delete(deleteWork);

module.exports = router;