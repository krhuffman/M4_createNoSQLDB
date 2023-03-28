const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
    .get(userController.getUser)
    .post(userController.createUser)

// router.route('/:id')
//     .get(userController.getDataById)
//     .patch(userController.updateLoan)
//     .put(userController.putDataById)
//     .delete(userController.deleteLoan)

module.exports = router;