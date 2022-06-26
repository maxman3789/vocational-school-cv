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
        console.log("class Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('class');
// }

// View class
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT class.id, class.class_name, class.capacity, class.class_start, class.class_end, campus.campus_name, department.department_name, instructor.first_name, instructor.middle_name, instructor.last_name, semester.semester_name FROM class JOIN campus ON class.campus_id=campus.id JOIN department ON department.id=class.department_id JOIN instructor ON instructor.id=class.instructor_id JOIN semester ON semester.id=class.semester_id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('class', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);
    });
}

// find class by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM class WHERE class_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('class', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}


// Add new class
exports.form = (req, res) => {
    res.render('add-class');
}

// Add new class
exports.create = (req, res) => {
    const { class_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO class SET class_name = ?', [class_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-class', { alert: 'class added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM class WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-class', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);
    });
}

// Update course
exports.update = (req, res) => {
    const { class_name } = req.body;
    // User the connection
    connection.query('UPDATE class SET class_name = ? WHERE id = ?', [class_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM class WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-class', { rows, alert: `${class_name} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from class table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);
    });
}

// Delete adjuster
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM class WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/class');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT class.id, class.class_name, class.capacity, class.class_start, class.class_end, campus.campus_name, department.department_name, instructor.first_name, instructor.middle_name, instructor.last_name, semester.semester_name FROM class JOIN campus ON class.campus_id=campus.id JOIN department ON department.id=class.department_id JOIN instructor ON instructor.id=class.instructor_id JOIN semester ON semester.id=class.semester_id WHERE class.id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-class', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from class table: \n', rows);
    });

}