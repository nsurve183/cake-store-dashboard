


const mongoose = require('mongoose');

const adminUser = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        unique: true,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('adminuser', adminUser)