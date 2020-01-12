const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const classroomSocket = require('./socket/classroom');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
const qaLiveRouter = require('./routes/qalive');

app.use('/users', usersRouter);
app.use('/qa', qaLiveRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    classroomSocket();
});