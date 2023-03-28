const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
{

    name: {
        type: String,
        required: [true, 'A user name must have an name'],
        unique: true,
        trim: true,
        maxlength: [20, 'An name must have less or equal then 20 characters'],
        minlength: [8, 'An name must have more or equal then 8 characters']
    },
    email: {
        type: String,
        required: [true, 'A email address is not valid'],
        unique: true,
        trim: true
    },
    passowrd: {
        type: String,
        required: [true, 'A course name must have an passowrd'],
        unique: true,
        trim: true,
        maxlength: [20, 'An passowrd must have less or equal then 20 characters'],
        minlength: [8, 'An passowrd must have more or equal then 8 characters']
    },
    confirmPassowrd: {
        type: String,
        required: [true, 'A confirmPassowrd name must have an ID'],
        unique: true,
        trim: true,
        maxlength: [20, 'An confirmPassowrd must have less or equal then 20 characters'],
        minlength: [8, 'An confirmPassowrd must have more or equal then 8 characters']
    }
     
});

const User = mongoose.model('User', userSchema);

module.exports = User;