const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

var routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/reportdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });


app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});
