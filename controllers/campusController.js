const mysql = require('mysql');

// Connection Pool
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("Campus Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('adjuster');
// }

// View Campus
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM campus', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('campus', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from Campus table: \n', rows);
    });
}


// Edit Campus
exports.edit = (req, res) => {
    // Campus the connection
    connection.query('SELECT * FROM campus WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-campus', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from Campus table: \n', rows);
    });
}

// Update Campus
exports.update = (req, res) => {
    const { campus_name } = req.body;
    // Campus the connection
    connection.query('UPDATE campus SET campus_name = ? WHERE id = ?', [campus_name, req.params.id], (err, rows) => {

        if (!err) {
            // campus the connection
            connection.query('SELECT * FROM campus WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-campus', { rows, alert: `${campus_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from campus table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from campus table: \n', rows);
    });
}

exports.viewall = (req, res) => {

    // campus the connection
    connection.query('SELECT * FROM campus WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-campus', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from campus table: \n', rows);
    });

}