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
        console.log("instructor Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('instructor');
// }

// View instructor
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT instructor.id, instructor.first_name, instructor.middle_name, instructor.last_name, instructor.email, instructor.username, instructor.password, instructor.street, instructor.city, instructor.state, instructor.zip, instructor.country, instructor.creation_date, instructor.phone, department.department_name, campus.campus_name FROM instructor JOIN department ON instructor.department_id=department.id JOIN campus ON campus.id=instructor.campus_id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('instructor', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);
    });
}

// // find instructor by Search
// exports.find = (req, res) => {
//     let searchTerm = req.body.search;
//     // User the connection
//     connection.query('SELECT * FROM instructor WHERE title LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
//         if (!err) {
//             res.render('instructor', { rows });
//         } else {
//             console.log(err);
//         }
//         // console.log('The data from instructor table: \n', rows);

//         // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
//     });

// }


// Add new instructor
exports.form = (req, res) => {
    res.render('add-instructor');
}

// Add new instructor
exports.create = (req, res) => {
    const { first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, creation_date, phone } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO instructor SET first_name = ?, middle_name = ?, last_name = ?, email = ?, username = ?, password = ?, street = ?, city = ?, state = ?, zip = ?, country = ?, creation_date = ?, phone = ?', [first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, creation_date, phone], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-instructor', { alert: 'instructor added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM instructor WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-instructor', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);
    });
}

// Update course
exports.update = (req, res) => {
    const { first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, creation_date, phone } = req.body;
    // User the connection
    connection.query('UPDATE instructor SET first_name = ?, middle_name = ?, last_name = ?, email = ?, username = ?, password = ?, street = ?, city = ?, state = ?, zip = ?, country = ?, creation_date = ?, phone = ? WHERE id = ?', [first_name, middle_name, last_name, email, username, password, street, city, state, zip, country, creation_date, phone, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM instructor WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-instructor', { rows, alert: `${first_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from course table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);
    });
}

// Delete adjuster
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM instructor WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/instructor');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT instructor.id, instructor.first_name, instructor.middle_name, instructor.last_name, instructor.email, instructor.username, instructor.password, instructor.street, instructor.city, instructor.state, instructor.zip, instructor.country, instructor.creation_date, instructor.phone, department.department_name, campus.campus_name FROM instructor JOIN department ON instructor.department_id=department.id JOIN campus ON campus.id=instructor.campus_id WHERE instructor.id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-instructor', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from instructor table: \n', rows);
    });

}