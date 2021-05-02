var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');

router.get('/', function(req, res) {
    const saltRounds = 10;
    
    const password = '1234';
    const encryptPassword = bcrypt.hashSync(password, saltRounds);

    console.log( 'encryptPassword : ', encryptPassword );

    const isPasswordCompare = bcrypt.compareSync(password, encryptPassword);

    console.log( 'same : ', isPasswordCompare );

    res.send( {'encryptPassword' : encryptPassword, 'same' : isPasswordCompare} );
});

module.exports = router;