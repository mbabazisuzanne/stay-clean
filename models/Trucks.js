const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
    drivername:{
        type: String
    },
    regnumber:{
        type: String,
        unique: true
    },
    codenumber:{
        type: String,
        unique: true
    },
    currentlocation:{
        type: String
    },
    nextdest:{
        type: String
    },
    numberofconductors:{
        type: String
    }
})

module.exports = mongoose.model('Trucks', truckSchema);