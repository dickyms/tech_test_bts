'use strict';

const   express     = require('express'),
        router      = express.Router(),
        users = require('../domain/services/user-service'); 

router.post('/register', users.Store);
module.exports = router;