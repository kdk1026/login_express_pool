var express = require('express');
// var app = express();
var router = express.Router();
var path = require('path');

router.get('/main', function(req, res) {
    if ( req.session.user ) {
        res.sendFile(path.join(__dirname, '../public/main.html'));
    } else {
        res.redirect('/login');
    }
});

var login = require('./login');
var logout = require('./logout');
var signup = require('./signup');

router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);

module.exports = router;