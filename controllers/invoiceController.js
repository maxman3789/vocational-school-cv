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
        console.log("Invoice Connected...")
    }
})

// View Invoice
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT invoice.id, invoice.invoice_number, invoice.invoice_date, invoice.invoice_status, invoice.invoice_amount, insurance.insurance_name FROM invoice JOIN insurance ON invoice.insurance_id=insurance.id ORDER BY invoice.invoice_number', (err, rows, result) => {
        // When done with the connection, release it
        if (!err) {
            
            let removedUser = req.query.removed;
            
            res.render('invoice', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from invoice table: \n', rows);

    });
}

// find Insurance by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT invoice.id, invoice.invoice_number, invoice.invoice_date, invoice.invoice_status, invoice.invoice_amount, insurance.insurance_name FROM invoice JOIN insurance ON invoice.insurance_id=insurance.id WHERE invoice.invoice_number LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('invoice', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
        // 'SELECT * FROM insurance WHERE insurance_name LIKE ?'
        // SELECT invoice.id, invoice.invoice_number, invoice.invoice_void, invoice.invoice_date, invoice.invoice_packet, invoice.voided_by, invoice.revised_invoice_approved, invoice.revised_invoice_date, invoice.revised_invoice_amount, invoice.revised_invoice_notes, invoice.revised_invoice_upload, invoice.insurance_refused_to_pay_revised_invoice, invoice.insurance_refused_revised_invoice_date, invoice.revised_invoice_pending, insurance.insurance_name, invoice.invoice_status, invoice.invoice_amount, invoice.invoice_void_date FROM invoice JOIN insurance ON invoice.insurance_id=insurance.id WHERE insurance_name LIKE ? invoice_number LIKE ? invoice_void ? invoice_date ? revised_invoice_amount ? revised_invoice_notes ? insurance_refused_revised_invoice_date ? invoice_status ? invoice_amount ? invoice_void_date
    });

}

// Add new insurance
exports.form = (req, res) => {
    res.render('add-invoice');
}

// Add new insurance
exports.create = (req, res) => {
    const { invoice_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO invoice SET invoice_number = ?', [invoice_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-invoice', { alert: 'invoice added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM invoice WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-invoice', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Update invoice
exports.update = (req, res) => {
    const { invoice_name } = req.body;
    // User the connection
    connection.query('UPDATE invoice SET invoice_number = ? WHERE id = ?', [invoice_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM invoice WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-invoice', { rows, alert: `${invoice_name} has been updated.` });
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
    connection.query('DELETE FROM invoice WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/invoice');
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
    connection.query('SELECT * FROM invoice WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-invoice', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });

}