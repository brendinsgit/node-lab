//Load express
const express = require('express');
//Require modules
const path = require('path');

//require the Students 'database'
const studentsDb = require('./data/students');
const students = require('./data/students');
// Create express app
const app = express();


//Define a 'root' route directly on app(not best practice?)
app.get('/', function (req, res) {
    res.redirect('/home');
});

//Define a route for students info
app.get('/students', function(req, res) {
    const students = studentsDb.getAll();
    res.render('students/index', {
        students: students
    });
});

//open up app on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));