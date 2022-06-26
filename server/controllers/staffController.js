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
        console.log("staff Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('staff');
// }

// View staff
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT staff.id, staff.first_name, staff.middle_name, staff.last_name, staff.email, staff.username, staff.password, staff.street, staff.city, staff.state, staff.zip, staff.country, staff.phone, staff.designation, staff.type, staff.status, staff.creation_date, department.department_name, campus.campus_name FROM staff JOIN department ON staff.department_id=department.id JOIN campus ON campus.id=staff.campus_id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('staff', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);
    });
}

// find staff by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM staff WHERE first_name LIKE ? last_name', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('staff', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}


// Add new staff
exports.form = (req, res) => {
    res.render('add-staff');
}

// Add new staff
exports.create = (req, res) => {
    const { first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, phone, designation, type, status, creation_date, campus_id, department_id } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO staff SET first_name = ?, middle_name = ?, last_name = ?, email = ?, username = ?, password = ?, street = ?, city = ?, state = ?, zip = ?, country = ?, phone = ?, designation = ?, type = ?, status = ?, creation_date = ?, campus_id = ?, department_id = ?', [first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, phone, designation, type, status, creation_date, campus_id, department_id], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-staff', { alert: 'staff added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);
    });
}

// Edit staff
exports.edit = (req, res) => {
    // staff the connection
    connection.query('SELECT * FROM staff WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-staff', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);
    });
}

// Update staff
exports.update = (req, res) => {
    const { first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, phone, designation, type, status, creation_date, campus_id, department_id } = req.body;
    // User the connection
    connection.query('UPDATE staff SET first_name = ?, middle_name = ?, last_name = ?, email = ?, username = ?, password = ?, street = ?, city = ?, state = ?, zip = ?, country = ?, phone = ?, designation = ?, type = ?, status = ?, creation_date = ?, campus_id = ?, department_id =?, WHERE id = ?', [first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, phone, designation, type, status, creation_date, campus_id, department_id, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM staff WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-staff', { rows, alert: `${first_name} ${last_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from staff table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);
    });
}

// Delete staff
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM staff WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/staff');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT staff.id, staff.first_name, staff.middle_name, staff.last_name, staff.email, staff.username, staff.password, staff.street, staff.city, staff.state, staff.zip, staff.country, staff.phone, staff.designation, staff.type, staff.status, staff.creation_date, department.department_name, campus.campus_name FROM staff JOIN department ON staff.department_id=department.id JOIN campus ON campus.id=staff.campus_id WHERE staff.id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-staff', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from staff table: \n', rows);
    });

}