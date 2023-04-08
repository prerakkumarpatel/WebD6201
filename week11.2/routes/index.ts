import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',page: "home",displayName:"" });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',page: "home",displayName:"" });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About',page: "about",displayName:"" });
});


router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Project',page: "projects",displayName:"" });
});


router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',page: "services",displayName:"" });
});


router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact us',page: "contact",displayName:"" });
});

router.get('/contact-list', function(req, res, next) {
  res.render('index', { title: 'Contact List',page: "contact-list",displayName:"" });
});

router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Edit',page: "edit",displayName:"" });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login',page: "login",displayName:"" });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register',page: "register",displayName:"" });
});


export default  router;
