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
        console.log("Students Connected...")
    }
})

// exports.view = (req, res) => {
//     res.render('students');
// }

// View Insurance
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM insurance', (err, rows, result) => {
        // When done with the connection, release it
        if (!err) {
            
            let removedUser = req.query.removed;
            
            res.render('students', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from insurance table: \n', rows);
    });
}

// exports.view = (req, res) => {

//     connection.query('SELECT * FROM insurance', (err, result) => {
//         if(err) throw err;
//         const numOfResults = result.length;
//         const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
//         let page = req.query.page ? Number(req.query.page) : 1;
//         if(page > numberOfPages){
//             res.redirect('/?page='+encodeURIComponent(numberOfPages));
//         }else if(page < 1){
//             res.redirect('/?page='+encodeURIComponent('1'));
//         }
//         //Determine the SQL LIMIT starting number
//         const startingLimit = (page - 1) * resultsPerPage;
//         //Get the relevant number of POSTS for this starting page
        
//         connection.query(`SELECT * FROM insurance LIMIT ${startingLimit},${resultsPerPage}`, (err, result, rows)=>{
//             if(err) throw err;
//             let iterator = (page - 5) < 1 ? 1 : page - 5;
//             let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
//             if(endingLink < (page + 4)){
//                 iterator -= (page + 4) - numberOfPages;
//             }
//             res.render('students', {rows, data: result, page, iterator, endingLink, numberOfPages});
//         });
//     });

// }

// find Insurance by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM insurance WHERE insurance_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('students', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}

// Add new insurance
exports.form = (req, res) => {
    res.render('add-students');
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
            res.render('add-students', { alert: 'insurance_name added successfully.' });
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
            res.render('edit-students', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Update students
exports.update = (req, res) => {
    const { insurance_name } = req.body;
    // User the connection
    connection.query('UPDATE insurance SET insurance_name = ? WHERE id = ?', [insurance_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-students', { rows, alert: `${insurance_name} has been updated.` });
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

            res.redirect('/students');
            // let removedUser = encodeURIComponent('User successeflly removed.');
            // res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

    });

}

// exports.delete = (req, res) => {
//     const { insurance_name } = req.body;

//     // User the connection
//     connection.query('DELETE FROM insurance WHERE id = ?', [insurance_name], (err, rows) => {
//         //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
//         if (!err) {
//             // User the connection
//             connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
//                 // When done with the connection, release it

//                 if (!err) {
//                     res.render('delete-students', { rows, alert: `${insurance_name} has been updated.` });
//                 } else {
//                     console.log(err);
//                 }
//                 // console.log('The data from user table: \n', rows);
//             });
//         } else {
//             console.log(err);
//         }
//         // console.log('The data from user table: \n', rows);
//     });
// }

exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM insurance WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-students', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });

}


// THROWAWAY CODE


    // // Connection Pool
    // const pool = mysql.createPool({
    //     // connectionLimit: 100,
    //     host: process.env.DB_HOST,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME
    // });

// // View Students
// exports.view = (req, res) => {
//     res.render('students');

//     // Connect to DB
//     pool.getConnection((err, connection) => {
//         if (err) throw err; // not connected!
//         console.log('Connected as ID ' + connection.threadId);

//     // Queries
//     // User the connection
//     connection.query('SELECT * FROM students', (err, rows) => {
//         // When done with the connection, release it
//         connection.release();

//         if(!err) {
//             res.render('students', { rows });
//         } else {
//             console.log(err)
//         }

//         console.log('The data from insurance table: \n', rows)
//     });

//     });

// }


    // connection.query('UPDATE insurance SET status = ? WHERE id = ?', ['removed', req.params.id], (err, rows) => {
    //     if (!err) {
    //       let removedUser = encodeURIComponent('User successeflly removed.');
    //       res.redirect('/?removed=' + removedUser);
    //     } else {
    //       console.log(err);
    //     }
    //     console.log('The data from beer table are: \n', rows);
    //   });