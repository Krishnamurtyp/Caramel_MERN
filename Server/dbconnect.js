const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/caramelitacademy";
// mongodb+srv://caramel_mern:Welcome%40123@projectz-gjuxk.mongodb.net/test?retryWrites=true&w=majority
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => console.log(err));

module.exports = connect;