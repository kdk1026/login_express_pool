var express = require('express');
// var app = express();
var router = express.Router();

router.get('/', function(req, res){
    if ( req.session.user ) {
        req.session.destroy();
        res.clearCookie('login_name');
        res.redirect('/login');
    }
});

module.exports = router;