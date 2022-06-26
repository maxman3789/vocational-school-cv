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
        console.log("Attorneys Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('adjuster');
// }

// View Attorneys
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM attorney ORDER BY attorney_name', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('attorney', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from attorney table: \n', rows);
    });
}

// find attorney by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM attorney WHERE attorney_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('attorney', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}


// Add new attorney
exports.form = (req, res) => {
    res.render('add-attorney');
}

// Add new insurance
exports.create = (req, res) => {
    const { attorney_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO attorney SET attorney_name = ?', [attorney_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-attorney', { alert: 'attorney_name added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Edit attorney
exports.edit = (req, res) => {
    // attorney the connection
    connection.query('SELECT * FROM attorney WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-attorney', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from attorney table: \n', rows);
    });
}

// Update attorney
exports.update = (req, res) => {
    const { attorney_name } = req.body;
    // attorney the connection
    connection.query('UPDATE attorney SET attorney_name = ? WHERE id = ?', [attorney_name, req.params.id], (err, rows) => {

        if (!err) {
            // attorney the connection
            connection.query('SELECT * FROM attorney WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-attorney', { rows, alert: `${attorney_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from attorney table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from attorney table: \n', rows);
    });
}

// Delete adjuster
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM attorney WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/attorney');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from attorney table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // attorney the connection
    connection.query('SELECT * FROM attorney WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-attorney', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from attorney table: \n', rows);
    });

}