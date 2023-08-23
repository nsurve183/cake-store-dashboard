

const mongoose = require('mongoose');
const mongoURL = 'mongodb://0.0.0.0:27017/cake_store';

const connectToMongo = () => {
    if(mongoose.connect(mongoURL)){
        console.log('connected with mongo')
    }else{
        console.log('connection failed')
    }
}

module.exports = connectToMongo;