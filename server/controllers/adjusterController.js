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
        console.log("Adjusters Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('adjuster');
// }

// View Adjusters
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT adjusters.id, adjusters.adjuster_name, adjusters.adjuster_email, adjusters.adjuster_phone, adjusters.adjuster_fax, insurance.insurance_name FROM adjusters JOIN insurance ON adjusters.insurance_id=insurance.id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('adjuster', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from adjuster table: \n', rows);
    });
}

// find Adjuster by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM adjusters WHERE adjuster_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('adjuster', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}


// Add new insurance
exports.form = (req, res) => {
    res.render('add-adjuster');
}

// Add new insurance
exports.create = (req, res) => {
    const { adjuster_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO adjusters SET adjuster_name = ?', [adjuster_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-adjuster', { alert: 'adjuster_name added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM adjusters WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-adjuster', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Update adjuster
exports.update = (req, res) => {
    const { adjuster_name } = req.body;
    // User the connection
    connection.query('UPDATE adjusters SET adjuster_name = ? WHERE id = ?', [adjuster_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM adjusters WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-adjuster', { rows, alert: `${adjuster_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from user table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Delete adjuster
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM adjusters WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/adjusters');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT adjusters.id, adjusters.adjuster_name, adjusters.adjuster_email, adjusters.adjuster_phone, adjusters.adjuster_fax, adjusters.adjuster_supervisor, adjusters.adjuster_supervisor_phone, adjusters.adjuster_supervisor_fax, insurance.insurance_name FROM adjusters JOIN insurance ON adjusters.insurance_id=insurance.id WHERE adjusters.id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-adjuster', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });

}