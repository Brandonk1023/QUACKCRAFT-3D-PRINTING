// import mongoose

/*
WHERE IS THIS DATA COMING FROM?
API CALL?
OUR OWN SEEDED SERVER?

need to think more

*/
const mongoose = require('mongoose');

const { Schema } = mongoose;

const downloadablesSchema = new Schema({
    Title: {
        type: String,
        required: true,
        trim: true,
    },
    Content: {
        type: string,
        required: true,
        trim: true,
    },
    DownloadURL: {
        type: string,
        required: true,
    },
})

module.exports = Downloables