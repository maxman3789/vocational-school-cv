const mysql = require('mysql');

// var totalRec = 0,
// pageSize = 6,
// pageCount = 0;
// var start = 0;
// var currentPage = 1;

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
        console.log("Insurance Connected...")
    }
})

// View Insurance
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM insurance ORDER BY insurance_name', (err, rows, result) => {
        // When done with the connection, release it
        if (!err) {
            
            let removedUser = req.query.removed;
            
            res.render('insurance', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from insurance table: \n', rows);

    });
}

// find Insurance by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM insurance WHERE insurance_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('insurance', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}

// Add new insurance
exports.form = (req, res) => {
    res.render('add-insurance');
}

// Add new insurance
exports.create = (req, res) => {
    const { insurance_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO insurance SET insurance_name = ?', [insurance_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-insurance', { alert: 'insurance_name added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-insurance', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Update insurance
exports.update = (req, res) => {
    const { insurance_name } = req.body;
    // User the connection
    connection.query('UPDATE insurance SET insurance_name = ? WHERE id = ?', [insurance_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-insurance', { rows, alert: `${insurance_name} has been updated.` });
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

// Delete User
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/insurance');
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
    connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-insurance', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });

}