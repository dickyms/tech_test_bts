'use strict';
const server = require('./server');
require('dotenv').config();

server.listen(process.env.PORT || 3000);
console.log('Connect to server : ' + process.env.PORT );

server.on('error', err => {
    console.error(err);
});