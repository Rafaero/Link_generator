const express = require('express');
const app = express();
const port = 3500;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute')



mongoose.connect('mongodb://localhost/newlinks', {
    useUnifiedTopology: true,
    useNewUrlParser: true 
})


let db = mongoose.connection;


db.on('error', () => {console.log('Houve um erro');})
db.once('open', () => {console.log('Banco caregado');})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

 app.use('/', linkRoute)

 app.listen(port, () => console.log(`Express app listen on port ${port}`));


