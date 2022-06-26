// const mysql = require('mysql');

//     // Connection Pool
// let connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
//   });


// View Home
exports.view = (req, res) => {
    res.render('home');
}

    // // View Insurance
    // exports.view = (req, res) => {

    //     // User the connection
    //     connection.query('SELECT * FROM insurance', (err, rows) => {
    //       // When done with the connection, release it
    //       if (!err) {
    //         // let removedUser = req.query.removed;
    //         res.render('students', { rows });
    //       } else {
    //         console.log(err);
    //       }
    //       console.log('The data from insurance table: \n', rows);
    //     });
    //   }
    
    //   // find Insurance by Search
    // exports.find = (req, res) => {
    //     let searchTerm = req.body.search;
    //     // User the connection
    //     connection.query('SELECT * FROM insurance WHERE insurance_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
    //       if (!err) {
    //         res.render('students', { rows });
    //       } else {
    //         console.log(err);
    //       }
    //       console.log('The data from user table: \n', rows);
    
    //       // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    //     });
    
    // }
    
    // // Add new insurance
    // exports.find = (req, res) => {
    //     res.render('add-students');
    // }