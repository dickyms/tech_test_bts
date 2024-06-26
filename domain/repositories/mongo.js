const mongoose = require('mongoose');
const user = require('../entities/user');

mongoose.set('useFindAndModify', false);

let arrayConns = [], db = {};

if (process.env.MONGODB_URI && process.env.MONGODB_URI > 0) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10 
      });
      db[c.nameconn].conn = mongoose;
      db[c.nameconn].User = user(mongoose);
      exports.db = db;
} else {
    console.log("mongo connection failed")
}