// https://www.youtube.com/watch?v=1aXZQcG2Y6I
// http://localhost/phpmyadmin/index.php
// https://raddy.dev/blog/simple-user-management-system-nodejs-express-mysql-handlebars/
// https://www.eukhost.com/kb/steps-to-copy-a-mysql-table-with-phpmyadmin-explained/
// https://codeshack.io/basic-login-system-nodejs-express-mysql/
// https://www.youtube.com/watch?v=VavWEtI5T7c
// https://www.devopsschool.com/blog/how-to-downgrade-php-from-8-0-0-to-7-1-32-in-xampp-8-0-0/
// https://github.com/learnable-content/nodejs-mysql


const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');


// require('dotenv').config();
dotenv.config({ path: './.env'})

const app = express();
// he uses 5000
const port = process.env.PORT || 3000;

// Parsing Middleware
// Parse application/x-www-form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

// Static Files
app.use(express.static('public'));

// // Templating Engine
// app.engine('hbs', exphbs.engine( {extname: '.hbs' }));
// app.set('view engine', 'hbs');

// Update to 6.0.X
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs', 'ejs');

// // Connection Pool
// const pool = mysql.createPool({
// let connection = mysql.createConnection({
//     connectionLimit : 100,
//     host            : process.env.DB_HOST,
//     user            : process.env.DB_USER,
//     password        : process.env.DB_PASS,
//     database        : process.env.DB_NAME
// });

// // Connect to DB
// pool.getConnection((err, connection) => {
//     if(err) throw err; // not connected!
//     console.log('Connected as ID ' + connection.threadId);
// });

// connection.connect( (error) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("MYSQL Connected...")
//     }
// })

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
console.log(__dirname);

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define Routes

const routes = require('./server/routes/user');
app.use('/', routes);

app.use('/auth', require('./server/routes/auth'));

// const adjroutes = require('./server/routes/adjuster');
// app.use('/adjusters', adjroutes);

// const pageroutes = require('./server/routes/pages');
// app.use('/register', pageroutes);

// const studentRoutes = require('./server/routes/student');
// app.use('/students', studentRoutes);


app.listen(port, () => console.log(`Listening on port ${port}`));