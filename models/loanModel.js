const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    loanId: {
        type: Number,
        required: [true, 'A course name must have an ID'],
        unique: true,
        trim: true,
        maxlength: [3, 'An ID must have less or equal then 3 characters'],
        minlength: [1, 'An ID must have more or equal then 1 characters']
     
    },
    customerName: {
        type: String,
        required: [true, 'A customer must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customers name must have less or equal then 40 characters'],
        minlength: [10, 'A customers name must have more or equal then 10 characters']
     
    },
    phoneNumber: {
        type: Number,
        required: [true, 'A customer must have a phone number'],
        unique: true,
        trim: true,
        length: [10, 'A phone number must have 10 characters']
    },
    address: {
        type: String,
        required: [true, 'A customer must have an address'],
        unique: true,
        trim: true,
        maxlength: [40, 'An address must have less or equal then 40 characters.'],
        minlength: [10, 'An address must have more or equal then 10 characters.']
    },
    loanAmount: {
        type: Number,
        min: [1000, 'A loan must be greater than 1000$'],
        
    },
    interest: {
        type: Number,
        required: [true, 'A loan must have interest'],
        unique: true,
        trim: true,
        min: [0.15, 'Interest must be a decimal.'],
        
    },
    loanTermYears: {
        type: Number,
        required: [true, 'A loan must have a term in years.'],
        unique: true,
        trim: true,
        min: [1, 'A term must be greater or equal to 1 year.'],
        max: [7, 'A term must be less or equal to 7 years.']
    },
    loanType: {
        type: String,
        required: [true, 'A loan must have a loan type.'],
        unique: true,
        trim: true,
        maxlength: [40, 'A description  must have less or equal then 40 characters'],
        minlength: [10, 'A description  must have more or equal then 10 characters']
    },
    description: {
        type: String,
        required: [true, 'A description must have a intrusctor  name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A description  must have less or equal then 40 characters'],
        minlength: [10, 'A description  must have more or equal then 10 characters']
    },

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;