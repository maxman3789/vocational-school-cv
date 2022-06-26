const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const userController = require('../controllers/userController');
const aboutController = require('../controllers/aboutController');
const editController = require('../controllers/editController');
const studentController = require('../controllers/studentController');
const adjusterController = require('../controllers/adjusterController');
const insuranceController = require('../controllers/insuranceController');
const referralEmpController = require('../controllers/referralEmpController');
const registerController = require('../controllers/registerController');
const invoiceController = require('../controllers/invoiceController');
const attorneyController = require('../controllers/attorneyController');
const campusController = require('../controllers/campusController');
const courseController = require('../controllers/courseController');
const instructorController = require('../controllers/instructorController');
const classController = require('../controllers/classController');
const staffController = require('../controllers/staffController');


const { append } = require('express/lib/response');

// create, find, update, delete. Connects controllers
router.get('/', userController.view);

router.get('/edit', editController.view);

router.get('/about-us', aboutController.view);

router.get('/register', registerController.view);

router.get('/students', studentController.view);
router.post('/students', studentController.find);
router.get('/addstudents', studentController.form);
router.post('/addstudents', studentController.create);
router.get('/editstudents/:id', studentController.edit);
router.post('/editstudents/:id', studentController.update);
router.get('/delete/:id', studentController.delete);
router.get('/viewstudents/:id', studentController.viewall);

router.get('/adjusters', adjusterController.view);
router.post('/adjusters', adjusterController.find);
router.get('/addadjusters', adjusterController.form);
router.post('/addadjusters', adjusterController.create);
router.get('/editadjusters/:id', adjusterController.edit);
router.post('/editadjusters/:id', adjusterController.update);
router.get('/delete/:id', adjusterController.delete);
router.get('/viewadjusters/:id', adjusterController.viewall);

router.get('/insurance', insuranceController.view);
router.post('/insurance', insuranceController.find);
router.get('/addinsurance', insuranceController.form);
router.post('/addinsurance', insuranceController.create);
router.get('/editinsurance/:id', insuranceController.edit);
router.post('/editinsurance/:id', insuranceController.update);
router.get('/delete/:id', insuranceController.delete);
router.get('/viewinsurance/:id', insuranceController.viewall);

router.get('/referrals', referralEmpController.view);
router.post('/referrals', referralEmpController.find);
router.get('/addreferrals', referralEmpController.form);
router.post('/addreferrals', referralEmpController.create);
router.get('/editreferrals/:id', referralEmpController.edit);
router.post('/editreferrals/:id', referralEmpController.update);
router.get('/delete/:id', referralEmpController.delete);
router.get('/viewreferrals/:id', referralEmpController.viewall);

router.get('/invoice', invoiceController.view);
router.post('/invoice', invoiceController.find);
router.get('/addinvoice', invoiceController.form);
router.post('/addinvoice', invoiceController.create);
router.get('/editinvoice/:id', invoiceController.edit);
router.post('/editinvoice/:id', invoiceController.update);
router.get('/delete/:id', invoiceController.delete);
router.get('/viewinvoice/:id', invoiceController.viewall);

router.get('/attorney', attorneyController.view);
router.post('/attorney', attorneyController.find);
router.get('/addattorney', attorneyController.form);
router.post('/addattorney', attorneyController.create);
router.get('/editattorney/:id', attorneyController.edit);
router.post('/editattorney/:id', attorneyController.update);
router.get('/delete/:id', attorneyController.delete);
router.get('/viewattorney/:id', attorneyController.viewall);


router.get('/campus', campusController.view);
router.get('/editcampus/:id', campusController.edit);
router.post('/editcampus/:id', campusController.update);
router.get('/viewcampus/:id', campusController.viewall);


router.get('/course', courseController.view);
router.post('/course', courseController.find);
router.get('/addcourse', courseController.form);
router.post('/addcourse', courseController.create);
router.get('/editcourse/:id', courseController.edit);
router.post('/editcourse/:id', courseController.update);
router.get('/delete/:id', courseController.delete);
router.get('/viewcourse/:id', courseController.viewall);


router.get('/instructor', instructorController.view);
// router.post('/instructor', instructorController.find);
router.get('/addinstructor', instructorController.form);
router.post('/addinstructor', instructorController.create);
router.get('/editinstructor/:id', instructorController.edit);
router.post('/editinstructor/:id', instructorController.update);
router.get('/delete/:id', instructorController.delete);
router.get('/viewinstructor/:id', instructorController.viewall);


router.get('/class', classController.view);
router.post('/class', classController.find);
router.get('/addclass', classController.form);
router.post('/addclass', classController.create);
router.get('/editclass/:id', classController.edit);
router.post('/editclass/:id', classController.update);
router.get('/delete/:id', classController.delete);
router.get('/viewclass/:id', classController.viewall);


router.get('/staff', staffController.view);
router.post('/staff', staffController.find);
router.get('/addstaff', staffController.form);
router.post('/addstaff', staffController.create);
router.get('/editstaff/:id', staffController.edit);
router.post('/editstaff/:id', staffController.update);
router.get('/delete/:id', staffController.delete);
router.get('/viewstaff/:id', staffController.viewall);


router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('home', {
        instructor: req.instructor
    });
  });
  
  router.get('/register', (req, res) => {
    res.render('register');
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log(req.instructor);
    if( req.instructor ) {
      res.render('profile', {
        instructor: req.instructor
      });
    } else {
      res.redirect('/login');
    }
    
  });

// Router. Displays pages
// router.get('/', (req, res) => {
//     res.render('home');
// });

// router.get('/about-us', (req, res) => {
//     res.render('about');
// });

// router.get('/register', (req, res) => {
//     res.render('register');
// });

// router.get('/edit', (req, res) => {
//     res.render('edit');
// });

// router.get('/students', (req, res) => {
//     res.render('students');
// });

// router.get('/addstudents', (req, res) => {
//     res.render('add-students');
// });

// router.get('/editstudents', (req, res) => {
//     res.render('edit-students');
// });

// router.get('/adjusters', (req, res) => {
//     res.render('adjuster');
// });


module.exports = router;