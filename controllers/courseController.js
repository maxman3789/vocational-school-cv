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
        console.log("course Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('course');
// }

// View course
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT course.id, course.course_number, course.title, course.duration, course.expires_after, course.description, course.credit_hours, course.fa_unit, course.continuing_ed_credits, course.instructional_hours, course.lab_hours, course.clinical_hours, course.capacity, course.prereq_credit_hours, course.subcontract_unexcused_absence, course.min_score_for_credit, course.min_age, course.department_id, department.department_name FROM course JOIN department ON course.department_id=department.id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('course', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);
    });
}

// find course by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM course WHERE title LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('course', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}


// Add new course
exports.form = (req, res) => {
    res.render('add-course');
}

// Add new course
exports.create = (req, res) => {
    const { course_number } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO course SET course_number = ?', [course_number], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-course', { alert: 'course_number added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM course WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-course', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);
    });
}

// Update course
exports.update = (req, res) => {
    const { course_number } = req.body;
    // User the connection
    connection.query('UPDATE course SET course_number = ? WHERE id = ?', [course_number, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM course WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-course', { rows, alert: `${course_number} has been updated.` });
                } else {
                    console.log(err);
                }
                // console.log('The data from course table: \n', rows);
            });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);
    });
}

// Delete adjuster
exports.delete = (req, res) => {
    // Delete a record

    // User the connection
    connection.query('DELETE FROM course WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/course');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);

    });

}

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT course.id, course.course_number, course.title, course.duration, course.expires_after, course.description, course.credit_hours, course.fa_unit, course.continuing_ed_credits, course.instructional_hours, course.lab_hours, course.clinical_hours, course.capacity, course.prereq_credit_hours, course.subcontract_unexcused_absence, course.min_score_for_credit, course.min_age, department.department_name FROM course JOIN department ON course.department_id=department.id WHERE course.id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-course', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from course table: \n', rows);
    });

}