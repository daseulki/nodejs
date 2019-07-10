const mongoose = require('mongoose');

const { Schema } = mongoose;

const mapSchema = new Schema ({
    lonlat : {
        type : Number,
        required: true,
    },

    createdt: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Map', mapSchema)