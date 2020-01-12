const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qaLiveSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    persistence: {
        type: String,
        required: true
    },
    logToParent: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
});

const QaLive = mongoose.model('QaLive', qaLiveSchema);

module.exports = QaLive;
