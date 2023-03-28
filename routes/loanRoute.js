const express = require('express');
const loanRouter = express.Router();
const loanController = require('../controllers/loanController');

loanRouter.route('/')
    .get(loanController.getloan)
    .post(loanController.createLoan)

// loanRouter.route('/:id')
//     .get(loanController.getDataById)
//     .patch(loanController.updateLoan)
//     .put(loanController.putDataById)
//     .delete(loanController.deleteLoan)

module.exports = loanRouter;