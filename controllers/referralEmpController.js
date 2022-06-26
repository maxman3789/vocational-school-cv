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
        console.log("Referrals Connected...")
    }
})

// Referral Employee View
exports.view = (req, res) => {

    // User the connection
    connection.query('SELECT referralemployee.id, referralemployee.refemp_name, referralemployee.referral_email, referralemployee.referral_phone, referralemployee.referral_address, referral.referral_organization FROM referralemployee JOIN referral ON referralemployee.referral_id=referral.id', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('referrals', { rows, removedUser });
        } else {
            console.log(err);
        }
        // console.log('The data from adjuster table: \n', rows);
    });
}

// find Referral by Search
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM referralemployee WHERE refemp_name LIKE ?', ['%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('referrals', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);

        // example for searching in 2 (more) columns: connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%']
    });

}

// Add new referrals
exports.form = (req, res) => {
    res.render('add-referrals');
}

// Add new referrals
exports.create = (req, res) => {
    const { refemp_name } = req.body;
    //  const { first_name, last_name, email, phone, comments } = req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query('INSERT INTO referralemployee SET refemp_name = ?', [refemp_name], (err, rows) => {
        //connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments],
        if (!err) {
            res.render('add-referrals', { alert: 'referral_name added successfully.' });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Edit user
exports.edit = (req, res) => {
    // User the connection
    connection.query('SELECT * FROM referralemployee WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-referrals', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Update Referrals
exports.update = (req, res) => {
    const { refemp_name } = req.body;
    // User the connection
    connection.query('UPDATE referralemployee SET refemp_name = ? WHERE id = ?', [refemp_name, req.params.id], (err, rows) => {

        if (!err) {
            // User the connection
            connection.query('SELECT * FROM referralemployee WHERE id = ?', [req.params.id], (err, rows) => {
                // When done with the connection, release it

                if (!err) {
                    res.render('edit-referrals', { rows, alert: `${refemp_name} has been updated.` });
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
    connection.query('DELETE FROM referralemployee WHERE id = ?', [req.params.id], (err, rows) => {

        if (!err) {

            res.redirect('/referrals');
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
    connection.query('SELECT * FROM referralemployee WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-referrals', { rows });
        } else {
            console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });

}