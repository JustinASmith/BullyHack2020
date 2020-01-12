const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
