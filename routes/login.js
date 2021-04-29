var express = require('express');
// var app = express();
var router = express.Router();
var path = require('path');
var getConnection = require('../utill/mysql_pool.js');

router.get('/', function(req, res) {
    if ( !req.session.user ) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    } else {
        res.redirect('/');
    }
});

router.post('/', function(req, res) {
    var email = req.body.email;

    getConnection((conn) => {
        var query = conn.query('select * from user where email=?', [email], function(err, rows) {
            if (err) {
                res.status(500).json(err);
            }
    
            if (rows.length) {
                req.session.user = {
                    email : rows[0].email,
                    name : rows[0].name
                };
    
                res.cookie('login_name', req.session.user.name, {
    
                });
    
                res.json( {success : true} );
            } else {
                res.json( {success : false} );
            }
        });

        conn.release();
    });
});

module.exports = router;